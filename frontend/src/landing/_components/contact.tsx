import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20">
      <div className="flex flex-col mb-20 justify-center items-center">
        <h2 className="text-4xl font-bold">
          Ready to Start Your Coding Journey?
        </h2>
        <p className="max-w-150 mt-10 text-center">
          Join AlgoAscend today and transform your programming skills with our industry-aligned curriculum and expert instructors.
        </p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <h2>
            Contact Info
          </h2>
          <ul className="info">
            <li>
              <span>
                <MapPin />
              </span>
              <span></span>
            </li>
            <li>
              <span>
                <Mail />
              </span>
              <span>
                info@algoascend.in
              </span>
            </li>
            <li>
              <span>
                <Phone />
              </span>
              <span>
                +91 88733 68527
              </span>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>
            Send a Request
          </h2>
          <div className="formBox">
            <div className="inputBox w50">
              <Input type="text" required />
              <span>
                First Name
              </span>
            </div>
            <div className="inputBox w50">
              <Input type="text" required />
              <span>
                Last Name
              </span>
            </div>
            <div className="inputBox w50">
              <Input type="email" required />
              <span>
                Email Address
              </span>
            </div>
            <div className="inputBox w50">
              <Input type="text" required />
              <span>
                Mobile Number
              </span>
            </div>
            <Select>
              <SelectTrigger className="w-full max-w-180">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="inputBox w100">
              <Textarea required />
              <span className="bottom-10">
                Write your message here...
              </span>
            </div>
            <div className="inputBox w100">
              <Button className="w-full mt-10">
                Send Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}