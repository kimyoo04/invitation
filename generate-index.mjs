// indexBuilder.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 현재 파일의 디렉토리 경로를 얻기
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 커맨드 라인에서 디렉토리 경로 인자 받기
const targetDir = process.argv[2]
const directoryPath = path.join(__dirname, targetDir) // 디렉토리 경로 설정
const outputPath = path.join(directoryPath, 'index.ts')

// 파일에서 export 문을 파싱하는 함수
function parseExports(fileContent) {
  const namedExports = []
  let defaultExportName = null
  const exportRegex =
    /export\s+(default\s+)?(?:const|let|var|function|class|async function)\s+(\w+)/g
  const exportNamedRegex = /export\s+{([^}]+)}/g

  let match
  while ((match = exportRegex.exec(fileContent))) {
    if (match[1] === 'default ') {
      defaultExportName = match[2]
    } else {
      namedExports.push(match[2])
    }
  }

  while ((match = exportNamedRegex.exec(fileContent))) {
    match[1].split(',').forEach((e) => {
      const trimmed = e.trim()
      const asIndex = trimmed.indexOf(' as ')
      if (asIndex > -1) {
        namedExports.push(trimmed.substring(asIndex + 4))
      } else {
        namedExports.push(trimmed)
      }
    })
  }

  return { defaultExportName, namedExports }
}

// index.mjs 파일을 생성하는 함수
async function buildIndex(directory) {
  let files = await fs.promises.readdir(directory)
  files = files.filter((file) => file !== 'index.ts') // index.ts 파일 제외

  let indexContent = ''

  // 기존 index.ts 파일이 있으면 삭제
  if (fs.existsSync(outputPath)) {
    await fs.promises.unlink(outputPath)
  }

  for (const file of files) {
    if (!/\.(ts|tsx|js)$/.test(file)) continue // 확장자 필터링
    const filePath = path.join(directory, file)
    const fileNameWithoutExt = file.replace(/\.(ts|tsx|js)$/, '') // 확장자 제거
    const fileContent = await fs.promises.readFile(filePath, 'utf8')
    const { defaultExportName, namedExports } = parseExports(fileContent)

    if (defaultExportName || namedExports.length > 0) {
      let exportLine = `export { `
      if (defaultExportName) {
        exportLine += `default as ${defaultExportName}`
        if (namedExports.length > 0) {
          exportLine += `, `
        }
      }
      exportLine += namedExports.join(', ')
      exportLine += ` } from './${fileNameWithoutExt}';`
      indexContent += exportLine + '\n'
    }
  }

  if (indexContent) {
    await fs.promises.writeFile(outputPath, indexContent)
    console.log('=== Index file created ===')
    console.log(`ㄴ ${outputPath}`)
  } else {
    console.log('No exports found in any file.')
  }
}

// 스크립트 실행
buildIndex(directoryPath).catch(console.error)

// 실행 예시
// node generate-index.mjs ./src/components
