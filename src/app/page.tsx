export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="w-full h-20 bg-yellow-200 flex items-center justify-between px-5">
        <p className='ml-2 font-bold text-2xl cursor-pointer'>PERAK</p>
        <button className="rounded-md bg-red-300 py-1 px-2 hover:ring-2">aa</button>
      </nav>
      <div className="bg-yellow-50 h-screen w-full p-2 flex justify-center">
        <p>profil pengguna</p>
      </div>
    </main>
  )
}