export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-100 p-4 text-center shadow-md mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Rediflow AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
