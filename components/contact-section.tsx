import { Card, CardContent } from "@/components/ui/card"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { UserIcon, Mail, Phone } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function ContactSection() {
  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 md:col-span-3 lg:col-span-4 overflow-hidden">
      <CardContent className="p-6 lg:p-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <UserIcon className="w-5 h-5 mr-2 text-cyan-400" />
            <h3 className="text-lg font-medium">Get in Touch</h3>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-zinc-300">
              I'm always interested in new projects and opportunities. Feel free to reach out if you want to work
              together or just say hello!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:work.karan7974@gmail.com"
                    className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                  >
                    work.karan7974@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+917974868547" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                    +91 7974868547
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <ContactFormDialog />
            </div>

            <div>
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
