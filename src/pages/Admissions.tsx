import { 
  CheckCircle2, FileText, DollarSign, Calendar,
  ArrowRight, Download, Phone, Mail, MapPin, GraduationCap
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Link } from 'react-router-dom'
const BASE_API = `${import.meta.env.VITE_BASE_API_URL}/apply`
const Admissions = () => {

  const intakeDates = [
    { program: 'Diploma in Animal Health and Production', intake: 'September 2026', deadline: 'To be updated' },
    { program: 'Certificate in Animal Health and Production', intake: 'September 2026', deadline: 'To be updated' },
    { program: 'Upgrading to Diploma', intake: 'September 2026', deadline: 'To be updated' },
    { program: 'Short Courses', intake: 'Monthly', deadline: '2 weeks before start' },
  ]

  const feeStructure = [
    { course: 'Diploma in Animal Health and Production', duration: '2.5 years', total: 'KSh 210,300', perSemester: 'KSh 42,060' },
    { course: 'Upgrading to Diploma', duration: '1.5 years', total: 'KSh 111,300', perSemester: 'KSh 37,100' },
    { course: 'Certificate in Animal Health and Production', duration: '2 years', total: 'KSh 136,700', perSemester: 'KSh 34,175' },
  ]

  const applicationSteps = [
    {
      step: 1,
      title: 'Download Application Form',
      description: 'Get the official application form from our website or collect it from the registrar\'s office.',
      icon: Download
    },
    {
      step: 2,
      title: 'Complete the Form',
      description: 'Fill in all required details accurately and attach all necessary documents.',
      icon: FileText
    },
    {
      step: 3,
      title: 'Pay Application Fee',
      description: 'Pay the non-refundable application fee of KSh 1,000 through the provided payment methods.',
      icon: DollarSign
    },
    {
      step: 4,
      title: 'Submit Application',
      description: 'Submit your completed application form with all attachments to the registrar\'s office.',
      icon: CheckCircle2
    },
    {
      step: 5,
      title: 'Wait for Response',
      description: 'Successful applicants will receive an admission letter with further instructions.',
      icon: Calendar
    }
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-ahiti-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Join Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Admissions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Start your journey towards a rewarding career in animal health and production. 
              Applications for the 2026 intake are now open.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-ahiti-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">2026</div>
              <div className="text-ahiti-primary/80">Intake Now Open</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">KSh 1,000</div>
              <div className="text-ahiti-primary/80">Application Fee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">To be updated</div>
              <div className="text-ahiti-primary/80">Application Deadline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">How to Apply</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Application Process
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Follow these simple steps to apply for your preferred course at AHITI Ndomba.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {applicationSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-6 text-center h-full">
                  <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-ahiti-primary" />
                  </div>
                  <div className="w-8 h-8 bg-ahiti-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-ahiti-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-ahiti-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="requirements" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Requirements
              </TabsTrigger>
              <TabsTrigger value="fees" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Fees
              </TabsTrigger>
              <TabsTrigger value="intakes" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Intakes
              </TabsTrigger>
              <TabsTrigger value="" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                             <Link to={BASE_API}>Apply Online</Link>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="requirements">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-ahiti-primary mb-6">Diploma Courses</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">KCSE Qualification</p>
                        <p className="text-gray-600 text-sm">Mean Grade C with C in Biology, C- in Chemistry, and C- in Mathematics/Agriculture/Physics</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Certificate Holders</p>
                        <p className="text-gray-600 text-sm">Relevant Certificate/Diploma qualifications from recognized institutions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">KCE/EACE</p>
                        <p className="text-gray-600 text-sm">Division II with credit in Biology and Chemistry</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-ahiti-primary mb-6">Certificate Courses</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">KCSE Qualification</p>
                        <p className="text-gray-600 text-sm">Mean Grade C with C- in Biology or Biological Sciences</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-ahiti-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Certificate Progression</p>
                        <p className="text-gray-600 text-sm">Credit in relevant one-year certificate course with D+ in Biology</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg lg:col-span-2">
                  <h3 className="text-xl font-bold text-ahiti-primary mb-6">Required Documents</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Copies of academic certificates',
                      'National ID or relevant identification document',
                      'Secondary school leaving certificate',
                      'Birth certificate',
                      'Two recent passport-size photos',
                      'Application fee receipt (KSh 1,000)'
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-ahiti-secondary" />
                        <span className="text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-ahiti-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Course</th>
                        <th className="px-6 py-4 text-left">Duration</th>
                        <th className="px-6 py-4 text-left">Total Fee</th>
                        <th className="px-6 py-4 text-left">Per Semester</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{fee.course}</td>
                          <td className="px-6 py-4 text-gray-600">{fee.duration}</td>
                          <td className="px-6 py-4 font-semibold text-ahiti-primary">{fee.total}</td>
                          <td className="px-6 py-4 text-gray-600">{fee.perSemester}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Fees are subject to change. Please confirm current fees with the registrar's office. 
                    Additional costs may include accommodation, meals, and personal expenses.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intakes">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-ahiti-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Program</th>
                        <th className="px-6 py-4 text-left">Intake Date</th>
                        <th className="px-6 py-4 text-left">Application Deadline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {intakeDates.map((intake, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{intake.program}</td>
                          <td className="px-6 py-4 text-gray-600">{intake.intake}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 bg-ahiti-secondary/30 text-ahiti-primary rounded-full text-sm font-medium">
                              {intake.deadline}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* <TabsContent value="apply">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-ahiti-primary mb-6 text-center">Online Application</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 7XX XXX XXX" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="course">Select Course</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diploma">Diploma in Animal Health and Production</SelectItem>
                        <SelectItem value="upgrading">Upgrading to Diploma</SelectItem>
                        <SelectItem value="certificate">Certificate in Animal Health and Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="kcse">KCSE Mean Grade</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="C+">C+</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="C-">C-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark">
                    Submit Application
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    You will receive an email with further instructions after submission.
                  </p>
                </form>
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-ahiti-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Get Help</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">
              Admissions Office
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Need assistance with your application? Contact our admissions office for help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <a href="tel:+254202096540" className="text-white/70 hover:text-ahiti-secondary transition-colors">020 209 6540</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <a href="mailto:ahitindomba@kilimo.go.ke" className="text-white/70 hover:text-ahiti-secondary transition-colors break-all">ahitindomba@kilimo.go.ke</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="font-bold text-white mb-2">Office Hours</h3>
              <p className="text-white/70">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-16 h-16 text-ahiti-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-ahiti-primary mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Join thousands of successful graduates who have transformed their careers through 
            quality training at AHITI Ndomba.
          </p>
          <Button size="lg" className="bg-ahiti-primary text-white hover:bg-ahiti-dark">
            Download Application Form
            <Download className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Admissions
