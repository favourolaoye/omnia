import Link from "next/link"
import Image from "next/image"
import { Play, Headphones, Users, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background px-3">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">omnia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Sermons
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Growth Path
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Community
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Log in
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 p-20 md:py-32">
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Floating Profile Images */}
              <div className="absolute top-0 left-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64&text=👩"
                  width={64}
                  height={64}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 text-white" />
                </div>
              </div>

              <div className="absolute top-20 right-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64&text=👨"
                  width={64}
                  height={64}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 text-white" />
                </div>
              </div>

              <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64&text=👩‍🦱"
                  width={64}
                  height={64}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 text-white" />
                </div>
              </div>

              <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=64&width=64&text=👨‍🦲"
                  width={64}
                  height={64}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <Play className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* Small floating indicator */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  One place to{" "}
                  <span className="relative">
                    <span className="relative z-10">nurture</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
                  </span>{" "}
                  your spiritual journey and connect
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  omnia helps spiritual seekers grow faster, deeper and more meaningfully, delivering personalized
                  guidance and community connections to nurture faith and ensure spiritual wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                    Register
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-white border-b">
          <div className="container">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 mb-8">
                More than 10,000+ spiritual seekers trust omnia
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                <div className="text-gray-400 font-semibold text-lg">ChurchConnect</div>
                <div className="text-gray-400 font-semibold text-lg">FaithCommunity</div>
                <div className="text-gray-400 font-semibold text-lg">SpiritualPath</div>
                <div className="text-gray-400 font-semibold text-lg">DivineGuidance</div>
                <div className="text-gray-400 font-semibold text-lg">SacredSpace</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-3">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow your spiritual life</h2>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                Our platform provides everything you need to deepen your faith and connect with others on the same
                journey.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inspiring Sermons</h3>
                <p className="text-muted-foreground">
                  Access a vast library of sermons from spiritual leaders across different traditions and denominations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Growth</h3>
                <p className="text-muted-foreground">
                  Receive tailored spiritual practices, meditations, and guidance based on your unique spiritual
                  journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals, join discussion groups, and participate in virtual gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Preview Section */}
        <section className="py-20 px-5 bg-purple-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Listen to inspiring sermons anytime, anywhere</h2>
                <p className="text-lg text-muted-foreground">
                  Our curated collection features spiritual teachings from diverse traditions. Find wisdom that
                  resonates with your personal journey.
                </p>
                <ul className="space-y-4">
                  {[
                    "Weekly new content from spiritual leaders",
                    "Downloadable for offline listening",
                    "Organized by topics and traditions",
                    "Personalized recommendations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-purple-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Browse Sermons</Button>
              </div>
              <div className="relative">
                <div className="rounded-xl border bg-background p-4 shadow-lg">
                  <div className="aspect-video rounded-lg bg-purple-900 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer">
                        <Play className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <iframe src="https://www.youtube.com/jkajkjwsl" className="rounded-lg opacity-70">
                      
                    </iframe>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="font-semibold">Finding Inner Peace in Chaotic Times</h3>
                    <p className="text-sm text-muted-foreground">Pastor Sarah Johnson • 28 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-3">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformed lives</h2>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                Hear from members of our community who have experienced spiritual growth through our platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-lg border bg-white shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=User${i}`}
                        width={48}
                        height={48}
                        alt="User"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Member Name</h4>
                      <p className="text-sm text-muted-foreground">Member for 1 year</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "omnia has been transformative for my spiritual journey. The personalized guidance and community
                    support have helped me develop a deeper connection with my faith."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-3 bg-purple-600 text-white">
          <div className="container">
            <div className="flex items-center justify-center text-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Start your spiritual journey today</h2>
                <p className="text-lg opacity-90">
                  Join thousands of others who are deepening their spiritual practice and finding community through
                  omnia.
                </p>
                <div className="flex justify-center sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="text-purple-600 border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container py-12 px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Growth Path
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-purple-600">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="font-bold">omnia</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} omnia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
