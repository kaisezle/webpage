import { useState, FormEvent } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            // EmailJS configuration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Validate configuration
            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file."
                );
            }

            // Validate that values are not placeholder values
            if (
                serviceId === "your_service_id" ||
                templateId === "your_template_id" ||
                publicKey === "your_public_key"
            ) {
                throw new Error(
                    "EmailJS configuration appears to be using placeholder values. Please update your .env file with actual EmailJS credentials."
                );
            }

            // Send email to info@kaisezle.com (main contact form submission)
            // This template should have "To Email" set to: info@kaisezle.com
            const mainEmailResponse = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            console.log("Main email sent successfully:", mainEmailResponse);

            // Send autoreply to the user (optional - only if autoreply template is configured)
            const autoreplyTemplateId = import.meta.env
                .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
            if (
                autoreplyTemplateId &&
                autoreplyTemplateId !== "your_autoreply_template_id"
            ) {
                try {
                    const autoreplyResponse = await emailjs.send(
                        serviceId,
                        autoreplyTemplateId,
                        {
                            from_name: formData.name,
                            from_email: formData.email,
                            message: formData.message,
                        },
                        publicKey
                    );
                    console.log(
                        "Autoreply sent successfully:",
                        autoreplyResponse
                    );
                } catch (autoreplyError) {
                    // Log autoreply error but don't fail the whole submission
                    // The main email to info@kaisezle.com was already sent successfully
                    console.warn(
                        "Autoreply failed (main email was sent):",
                        autoreplyError
                    );
                }
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
            }, 5000);
        } catch (error: any) {
            console.error("Email sending failed:", error);
            console.error("Full error object:", JSON.stringify(error, null, 2));

            // Log the full error response for debugging
            if (error?.response) {
                console.error("EmailJS response:", error.response);
                console.error("Status:", error.response.status);
                console.error("Text:", error.response.text);
            }

            let errorMsg =
                "Failed to send message. Please try again or email us directly at info@kaisezle.com";

            // Provide more specific error messages
            if (error?.text) {
                // EmailJS provides error details in error.text
                console.error("EmailJS error details:", error.text);
                if (
                    error.text.includes("Invalid service ID") ||
                    error.text.includes("service")
                ) {
                    errorMsg =
                        "Invalid EmailJS Service ID. Please check your VITE_EMAILJS_SERVICE_ID in .env file.";
                } else if (
                    error.text.includes("Invalid template ID") ||
                    error.text.includes("template")
                ) {
                    errorMsg =
                        "Invalid EmailJS Template ID. Please check your VITE_EMAILJS_TEMPLATE_ID in .env file.";
                } else if (
                    error.text.includes("Invalid public key") ||
                    error.text.includes("public key")
                ) {
                    errorMsg =
                        "Invalid EmailJS Public Key. Please check your VITE_EMAILJS_PUBLIC_KEY in .env file.";
                } else if (
                    error.text.includes("recipients address is empty") ||
                    error.text.includes("recipients")
                ) {
                    errorMsg =
                        'The "To Email" field is not set in your EmailJS template. Go to EmailJS Dashboard → Email Templates → Your Template → Set "To Email" to: info@kaisezle.com → Save';
                } else if (
                    error.text.includes("422") ||
                    error?.status === 422
                ) {
                    errorMsg =
                        'EmailJS validation error (422). Common causes: 1) "To Email" field not set in template, 2) Template variables don\'t match. Check browser console for details.';
                } else {
                    errorMsg = `EmailJS error: ${error.text}`;
                }
            } else if (
                error?.status === 422 &&
                error?.text?.includes("recipients")
            ) {
                errorMsg =
                    'The "To Email" field is not set in your EmailJS template. Go to EmailJS Dashboard → Email Templates → Your Template → Set "To Email" to: info@kaisezle.com → Save';
            } else if (error?.status === 422) {
                errorMsg =
                    'EmailJS validation error (422). Please check: 1) "To Email" is set in your template to info@kaisezle.com, 2) Template variables match (from_name, from_email, message). See console for details.';
            } else if (error?.message) {
                errorMsg = error.message;
            }

            setSubmitStatus("error");
            setErrorMessage(errorMsg);

            // Reset error message after 8 seconds (longer for detailed errors)
            setTimeout(() => {
                setSubmitStatus("idle");
                setErrorMessage("");
            }, 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-900 to-blue-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your business or explore our
                        products? We'd love to hear from you
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Email Us
                                </h3>
                                <p className="text-gray-300">
                                    info@kaisezle.com
                                </p>
                                <p className="text-gray-300">
                                    support@kaisezle.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Call Us
                                </h3>
                                <p className="text-gray-300">+1 956 533 6481</p>
                                <p className="text-gray-300">
                                    Mon-Fri, 9AM-6PM EST
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Visit Us
                                </h3>
                                <p className="text-gray-300">
                                    6421 N 10th St Suite 140
                                </p>
                                <p className="text-gray-300">
                                    McAllen, TX, 78501
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Your Message"
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            {submitStatus === "success" && (
                                <div className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                                    <CheckCircle className="w-5 h-5" />
                                    <p>
                                        Message sent successfully! We'll get
                                        back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="flex items-start gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <p className="text-sm">
                                        {errorMessage ||
                                            "Failed to send message. Please try again."}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 shadow-lg flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
