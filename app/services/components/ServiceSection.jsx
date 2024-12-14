import { ArrowRight } from 'lucide-react'

export default function ServiceSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Services Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#FFA500] font-semibold">WHY CHOOSE OUR SERVICES?</h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Providing Innovative & Sustainable Transformer Solutions
              </h2>
            </div>

            <div className="space-y-6">
              <ServiceCard
                title="Before-Sales Services"
                description="Rajtex Transformers before-sales service includes providing customers with product-related data, technical consultation, customising products and services, proceeding with multiform technical exchange and jointly working out design concepts."
              />

              <ServiceCard
                title="In-Sale Services"
                description="Rajtex Transformers in-sales service includes working on the requirements mentioned in the contract in full accordance. We keep in touch with the customers all the time while implementing the terms, conditions and demands mentioned by our client."
              />

              <ServiceCard
                title="After-Sales Services"
                description="Rajtex Transformers after-sales service objective is prompt, accurate and satisfactory and we handle problems promptly after receiving service information from customers."
              />
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative space-y-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/image1.jpg"
                alt="Industrial Transformer at Night"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/image4.jpg"
                alt="Transformer Against Blue Sky"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
        <ArrowRight className="w-6 h-6 text-black" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-xl">{description}</p>
      </div>
    </div>
  )
}

