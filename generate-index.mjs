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

// 파일에서 export 문을 파싱하는 함수
function parseExports(fileContent, fileNameWithoutExt) {
  const namedExports = []
  const typeExports = []
  let defaultExportName = null
  const exportRegex =
    /export\s+(default\s+)?(?:const|let|var|function|class|async function|type)?\s*([\w]+)/g
  const exportNamedRegex = /export\s+{([^}]+)}/g

  let match
  while ((match = exportRegex.exec(fileContent))) {
    if (match[1] === 'default ') {
      defaultExportName = fileNameWithoutExt // default export는 파일명으로 사용
    } else if (
      fileContent.slice(match.index, match.index + 11).includes('export type')
    ) {
      typeExports.push(match[2])
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

  return { defaultExportName, namedExports, typeExports }
}

// index.mjs 파일을 생성하는 함수
async function buildIndex(directory) {
  let files = await fs.promises.readdir(directory, { withFileTypes: true })
  files = files.filter((file) => file.name !== 'index.ts') // index.ts 파일 제외

  let indexContent = ''
  let hasValidExports = false

  for (const file of files) {
    const filePath = path.join(directory, file.name)
    if (file.isDirectory()) {
      await buildIndex(filePath) // 하위 디렉토리 순회
      const subDirFiles = await fs.promises.readdir(filePath)
      if (subDirFiles.length > 0) {
        indexContent += `export * from './${file.name}/index';\n`
        hasValidExports = true
      }
    } else if (/\.(ts|tsx|js)$/.test(file.name)) {
      const fileNameWithoutExt = file.name.replace(/\.(ts|tsx|js)$/, '') // 확장자 제거
      const fileContent = await fs.promises.readFile(filePath, 'utf8')
      const { defaultExportName, namedExports, typeExports } = parseExports(
        fileContent,
        fileNameWithoutExt,
      )

      if (
        defaultExportName ||
        namedExports.length > 0 ||
        typeExports.length > 0
      ) {
        let exportLine = `export { `
        if (defaultExportName) {
          exportLine += `default as ${defaultExportName}`
          if (namedExports.length > 0 || typeExports.length > 0) {
            exportLine += `, `
          }
        }
        exportLine += namedExports.join(', ')
        if (namedExports.length > 0 && typeExports.length > 0) {
          exportLine += `, `
        }
        exportLine += typeExports.map((type) => `type ${type}`).join(', ')
        exportLine += ` } from './${fileNameWithoutExt}';`
        indexContent += exportLine + '\n'
        hasValidExports = true
      }
    }
  }

  const outputPath = path.join(directory, 'index.ts')
  if (hasValidExports) {
    await fs.promises.writeFile(outputPath, indexContent)
    console.log('=== Index file created ===')
    console.log(`ㄴ ${outputPath}`)
  } else {
    console.log(`No exports found in directory: ${directory}`)
  }
}

// 스크립트 실행
buildIndex(directoryPath).catch(console.error)

// 실행 예시
// node indexBuilder.mjs ./src/components
