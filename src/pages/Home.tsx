import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, GraduationCap, MapPin, Clock, 
  Award, BookOpen, Heart, Target, Eye, ArrowRight,
  Users, Building2, Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { fetchNews, formatNewsDate, type NewsArticle } from '@/lib/newsApi'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([])
  const [newsLoading, setNewsLoading] = useState(true)

  const heroImages = [
    '/images/DJI_0033@1129346556.jpg',
    '/images/DJI_0004@1044382624.jpg',
    '/images/DJI_0031@1127499514.jpg',
    '/images/DJI_0010@1069317691.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Fetch latest 3 news articles
  useEffect(() => {
    async function loadLatestNews() {
      try {
        setNewsLoading(true)
        const response = await fetchNews({ limit: 3, offset: 0 })
        setLatestNews(response.data)
      } catch (error) {
        console.error('Failed to load latest news:', error)
      } finally {
        setNewsLoading(false)
      }
    }
    loadLatestNews()
  }, [])

  const regularCourses = [
    {
      title: 'Diploma in Animal Health and Production',
      duration: '2.5 years',
      description: 'Comprehensive training for veterinary paraprofessionals with extensive practical experience.',
      icon: GraduationCap
    },
    {
      title: 'Certificate in Animal Health and Production',
      duration: '2 years',
      description: 'Foundation course for frontline extension workers in livestock sector.',
      icon: BookOpen
    },
    {
      title: 'Short Courses',
      duration: '5 days - 4 weeks',
      description: 'Practical training in AI, Poultry, Bee Farming, and more.',
      icon: Award
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`AHITI Ndomba Campus ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ahiti-primary/90 via-ahiti-primary/70 to-ahiti-primary/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90">
              State Department of Livestock Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Animal Health & Industry Training Institute - Ndomba
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Nurturing Excellence in Animal Health and Production Training Since 1984. 
              Located in the serene landscapes of Kirinyaga County, Kenya.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90 font-semibold"
                asChild
              >
                <Link to="/courses">
                  Explore Courses
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white bg-white/20 hover:bg-white hover:text-ahiti-primary font-semibold backdrop-blur-sm"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-ahiti-secondary w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-ahiti-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">40+</div>
              <div className="text-ahiti-primary/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">500+</div>
              <div className="text-ahiti-primary/80">Current Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">480</div>
              <div className="text-ahiti-primary/80">Acres of Land</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">9</div>
              <div className="text-ahiti-primary/80">Programs Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/DJI_0033@1129346556.jpg"
                alt="AHITI Ndomba Campus"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-ahiti-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">1984</div>
                <div className="text-sm opacity-90">Year Established</div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="bg-ahiti-primary/10 text-ahiti-primary">About Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary">
                Center of Excellence in Animal Health Training
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Established in 1984, AHITI Ndomba is a registered Technical and Vocational Training Institute 
                under the State Department for Livestock Development, Ministry of Agriculture and Livestock Development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in Mwea East Sub-County, Kirinyaga County, on approximately 194.25 hectares 
                (480 acres) of land, providing a serene learning environment with excellent training facilities.
              </p>
              <div className="flex items-center space-x-4 text-ahiti-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Kirinyaga County, Kenya - 3km from Kutus Town</span>
              </div>
              <Button className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
                <Link to="/about">
                  Read More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-ahiti-primary to-ahiti-dark rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become a center of excellence in Animal Health and Production training for sustainable 
                development of the livestock sub-sector in East and Central Africa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-ahiti-secondary to-yellow-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-ahiti-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-ahiti-primary" />
              </div>
              <h3 className="text-xl font-bold text-ahiti-primary mb-4">Our Mission</h3>
              <p className="text-ahiti-primary/80 leading-relaxed">
                To provide quality training of technical personnel in Animal Health and Production for 
                effective performance in the livestock sub-sector, contributing to wealth creation in a 
                sustainable environment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-ahiti-primary" />
              </div>
              <h3 className="text-xl font-bold text-ahiti-primary mb-4">Our Mandate</h3>
              <p className="text-gray-600 leading-relaxed">
                To train Veterinary Paraprofessionals and other livestock value chain actors, 
                providing the requisite skilled human resource vital for growth in the livestock sub-sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Our Programs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Courses Offered
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer practical-oriented training in regular courses and short-duration courses 
              designed to equip you with industry-relevant skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regularCourses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <course.icon className="w-7 h-7 text-ahiti-primary" />
                </div>
                <h3 className="text-xl font-bold text-ahiti-primary mb-3">{course.title}</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Button variant="outline" className="w-full border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
                  <Link to="/courses">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Latest Updates</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              News & Announcements
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Stay updated with the latest happenings, achievements, and announcements from AHITI Ndomba.
            </p>
          </div>

          {newsLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : latestNews.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {latestNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {news.coverImage && (
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={news.coverImage}
                        alt={news.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      {news.category && (
                        <Badge 
                          style={{
                            backgroundColor: `${news.category.color}20`,
                            color: news.category.color
                          }}
                        >
                          {news.category.label}
                        </Badge>
                      )}
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatNewsDate(news.publishedDate || news.dates.created)}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-ahiti-primary mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <Button variant="link" className="p-0 text-ahiti-primary hover:text-ahiti-dark" asChild>
                      <Link to="/news">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No news articles available at the moment.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
              <Link to="/news">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-20 bg-ahiti-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Our Facilities</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              World-Class Training Facilities
            </h2>
            <p className="max-w-3xl mx-auto text-white/80">
              Our campus features modern facilities designed to provide hands-on practical training 
              for all our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: 'Modern Classrooms', desc: 'Well-equipped lecture halls' },
              { icon: Users, title: 'Practical Labs', desc: 'Hands-on training facilities' },
              { icon: GraduationCap, title: 'Library', desc: 'Comprehensive learning resources' },
              { icon: Target, title: 'Demonstration Farm', desc: '480-acre training farm' },
            ].map((facility, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-7 h-7 text-ahiti-secondary" />
                </div>
                <h3 className="font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-white/70 text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ahiti-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-ahiti-primary/80 mb-8">
            Join thousands of successful graduates who have transformed their careers through 
            quality training at AHITI Ndomba.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-ahiti-primary text-white hover:bg-ahiti-dark" asChild>
              <Link to="/admissions">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
