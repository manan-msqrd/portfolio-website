import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })

    interface HandleChangeEvent {
        target: {
            name: string;
            value: string;
        };
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Manan',
                    from_email: form.email,
                    to_email: import.meta.env.VITE_TO_EMAIL,
                    message: form.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
    
            setLoading(false);
            alert("Your message has been sent!")
            setForm({
                name:'',
                email:'',
                message:''
            })
    
        } catch (error) {
            setLoading(false);
            console.log(error)
            alert("Something went wrong!")
        }

    };

    const handleChange = ({ target: { name, value } }: HandleChangeEvent) => {
        setForm({ ...form, [name]: value });
    };


  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className="inset-0 absolute min-h-screen"/>

            <div className="contact-container">
                <h3 className="head-text">Let's Talk</h3>
                <p className="text-white-600 text-lg">Reach out to me if you have any project ideas or job opportunities, I'll be glad to connect, or maybe just say hi <span className="waving-hand">👋</span>.</p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                <label className="space-y-3">
                    <span className="field-label">Full Name</span>

                    <input 
                        type="text" 
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="field-input mt-2"
                        placeholder="John Doe"
                    />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Email</span>

                    <input 
                        type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="field-input mt-2"
                        placeholder="johndoe@gmail.com"
                    />
                </label>

                <label className="space-y-3">
                    <span className="field-label">Your Message</span>

                    <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="field-input mt-2"
                        placeholder="Leave your message here..."
                    />
                </label>

                <button className="field-btn" type="submit" disabled={loading}>
                    {loading? 'Sending...' : 'Send Message'}

                    <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />
                </button>
            </form>
            </div>

        </div>
    </section>
  )
}

export default Contact