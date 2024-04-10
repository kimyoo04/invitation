import { Link } from "@tanstack/react-router";

export default function Navigation() {
  return (
    <div className="flex gap-2 p-4">
      <Link
        to="/"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Link
        to={"/posts"}
        activeProps={{
          className: "font-bold",
        }}
      >
        Posts
      </Link>
      <Link
        to="/layout-a"
        activeProps={{
          className: "font-bold",
        }}
      >
        Layout
      </Link>
    </div>
  );
}
