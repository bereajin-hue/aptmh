interface SectionTitleProps {
  title: string
  subtitle: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-brand'}`}>
        {title}
      </h2>
      <h3 className={`text-base md:text-lg font-normal ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        {subtitle}
      </h3>
      <div className={`mt-4 mx-auto w-16 h-1 bg-brand ${centered ? '' : 'ml-0'}`} />
    </div>
  )
}
