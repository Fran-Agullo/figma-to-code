import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido').max(255),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres').max(100),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 caracteres').max(20),
  service: z.string().min(1, 'Por favor selecciona un servicio'),
  budget: z.string().min(1, 'Por favor selecciona un presupuesto'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form data:', data);
      
      toast({
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });
      
      // Navigate to thank you page after short delay
      setTimeout(() => {
        navigate('/gracias');
      }, 1500);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Manrope',sans-serif]" lang="es">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-br from-white via-orange-50/30 to-white">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl text-[#030711] tracking-tight leading-[1.1] mb-6">
                Hablemos de tu <span className="text-[#EA580C]">Proyecto</span>
              </h1>
              <p className="text-xl text-[#8a8a8f] max-w-3xl mx-auto">
                Cuéntanos sobre tu negocio y cómo podemos ayudarte a alcanzar tus objetivos de crecimiento digital.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de tu empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono *</FormLabel>
                          <FormControl>
                            <Input placeholder="+52 123 456 7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Servicio de interés *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona un servicio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="growth-marketing">Growth Marketing</SelectItem>
                              <SelectItem value="seo-content">SEO & Content</SelectItem>
                              <SelectItem value="web-design-ux">Diseño Web & UX</SelectItem>
                              <SelectItem value="product-development">Desarrollo de Producto</SelectItem>
                              <SelectItem value="digital-strategy">Estrategia Digital</SelectItem>
                              <SelectItem value="analytics-data">Analytics & Data</SelectItem>
                              <SelectItem value="otros">Otros / No estoy seguro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Presupuesto aproximado *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona un rango" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem value="<10k">Menos de $10,000 USD</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000 USD</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000 USD</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000 USD</SelectItem>
                              <SelectItem value=">100k">Más de $100,000 USD</SelectItem>
                              <SelectItem value="no-sure">No estoy seguro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#EA580C] hover:bg-[#C2410C]"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                </Form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl text-[#030711] font-bold mb-6">
                    Información de Contacto
                  </h2>
                  <p className="text-lg text-[#8a8a8f] mb-8">
                    Estamos aquí para responder tus preguntas y ayudarte a comenzar tu proyecto. 
                    Responderemos en menos de 24 horas.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#EA580C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">Email</h3>
                      <a href="mailto:hola@birdiedigital.com" className="text-[#8a8a8f] hover:text-[#EA580C]">
                        hola@birdiedigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#EA580C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">Teléfono</h3>
                      <a href="tel:+525555555555" className="text-[#8a8a8f] hover:text-[#EA580C]">
                        +52 55 5555 5555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#EA580C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#030711] mb-1">Ubicación</h3>
                      <p className="text-[#8a8a8f]">
                        Ciudad de México, México<br />
                        Trabajamos con clientes globalmente
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#EA580C]/10 to-orange-50/30 p-8 rounded-3xl">
                  <h3 className="text-2xl text-[#030711] font-bold mb-4">
                    ¿Qué esperar?
                  </h3>
                  <ul className="space-y-3 text-[#030711]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#EA580C] font-bold">1.</span>
                      <span>Responderemos tu consulta en menos de 24 horas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EA580C] font-bold">2.</span>
                      <span>Agendaremos una llamada de descubrimiento (30 min)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EA580C] font-bold">3.</span>
                      <span>Te enviaremos una propuesta personalizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#EA580C] font-bold">4.</span>
                      <span>¡Comenzamos a trabajar juntos!</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
