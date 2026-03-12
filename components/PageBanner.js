export default function PageBanner({ title, image }) {
  return (
    <div className="relative h-[250px]  -mx-6">
      
      <img
        src={image}
        alt="banner"
        className="w-full h-[200px] object-cover opacity-50"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[red] hover:text-[white]"  >
          {title}
        </h1>
      </div>

    </div>
  )
}