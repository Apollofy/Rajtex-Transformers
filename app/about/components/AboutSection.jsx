import { CheckCircle, Users, Building, Star } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#FFA500]">WHO WE ARE</h2>
            
            <div className="space-y-4 text-xl font-medium">
              <p className="text-gray-600">
                Rajtex Transformers & Electricals was established in the year 1999. We are able to efficiently design high technology products that are appreciated for optimum performance and durability. In our manufacturing philosophy, quality is a way of life. Quality assurance starts from the selection of the most suitable raw materials.
              </p>
              <p className="text-gray-600">
                We also conduct routine test at every level of production so that errors can be detected right at the apex of manufacturing procedures. Our establishment is a renowned manufacturer, supplier and exporter of an exquisite range of Transformers.
              </p>
              <p className="text-gray-600">
                Our production unit is equipped with contemporary machinery and the most modern technology that empowers us to meet the growing needs of our important clientele within precise delivery schedules. We guarantee an outstanding range to our prestigious clientele with the support of meticulous efforts from our well-trained staff.
              </p>
              <p className="text-gray-600">
                We produce our products in accordance with defined international standards. All our products go through various quality parameters at our in-house testing section to ensure their quality. Furthermore, our quality control unit is outfitted with the most modern testing tools to deliver a perfect range to our patrons.
              </p>
              <p className="text-gray-600">
                Under the specialist guidance of our mentor, Mr. Rajkisan Gajraj, we have been able to attain an extensive list of contented clients. His immense knowledge and vast business experience have made us receptive to all the pros & cons of the business.
              </p>
            </div>

            {/* Product Range */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-[#FFA500] mb-2">Our Product Range:</h3>
              <p className="text-gray-600 text-xl font-medium">
                Electrical Transformer: 5 KVA to 10 MVA
              </p>
              <p className="text-gray-600">
                (Wide Input Range i.e., 3.3 KV, 6.6 KV, 11 KV, 22 KV, 33 KV)
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <StatCard icon={<CheckCircle className="h-6 w-6" />} value="91K+" label="Project Done" />
              <StatCard icon={<Users className="h-6 w-6" />} value="84K+" label="Happy Clients" />
              <StatCard icon={<Building className="h-6 w-6" />} value="42+" label="Company Support" />
              <StatCard icon={<Star className="h-6 w-6" />} value="4.7" label="Client Reviews" />
            </div>
          </div>

          {/* Right Column - Image and Rating */}
          <div className="relative">
            <div className="absolute -top-4 right-4 z-10">
              <div className="p-4 bg-blue-900 text-white rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">Excellent</div>
                  <div className="text-4xl font-bold">4.7</div>
                  <div className="mt-1 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full inline-block">
                    Client Ratings
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
              <img
                src="/image3.jpg"
                alt="Industrial Transformer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* ISO 9001-2015 Quality Standard */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p className="text-gray-800 font-semibold">
            We follow ISO 9001-2015 Quality Standard in our Manufacturing.
          </p>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }) {
  return (
    <div className="p-4 text-center bg-gray-100 rounded-lg shadow">
      <div className="flex flex-col items-center gap-2">
        <div className="text-[#FFA500]">{icon}</div>
        <div className="text-2xl md:text-3xl font-bold text-[#FFA500]">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  )
}

