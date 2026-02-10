'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Dna, Baby, Stethoscope, Scan, CheckCircle2 } from 'lucide-react';
import { fadeInVariant } from '@/utils/animations';
import { Button } from '@/components/Button';
import { WHATSAPP_URL, PHONE_URL } from '@/utils/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Dna,
  Baby,
  Stethoscope,
  Scan,
};

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
}

const serviceDetails: Record<string, ServiceDetail> = {
  ultrasound: {
    id: 'ultrasound',
    title: 'Advanced Ultrasound Imaging',
    subtitle: 'Precision Diagnostic Imaging with State-of-the-Art Technology',
    iconName: 'Activity',
    description: 'Our advanced ultrasound imaging services utilize cutting-edge technology to provide detailed, real-time visualization of internal organs, tissues, and blood flow. With high-resolution imaging capabilities, we ensure accurate diagnoses for a wide range of medical conditions.',
    features: [
      'High-resolution 4D ultrasound imaging',
      'Color Doppler for blood flow assessment',
      'Musculoskeletal ultrasound',
      'Abdominal and pelvic imaging',
      'Thyroid and breast ultrasound',
      'Vascular studies',
    ],
    benefits: [
      'Non-invasive and painless procedure',
      'No radiation exposure',
      'Real-time imaging for immediate assessment',
      'Safe for all age groups including pregnant women',
      'Quick results with expert interpretation',
    ],
    process: {
      title: 'What to Expect',
      steps: [
        'Schedule your appointment at a convenient time',
        'Arrive 10 minutes early for registration',
        'Our technician will explain the procedure',
        'The scan typically takes 20-30 minutes',
        'Results are reviewed by our specialist',
        'Detailed report provided within 24 hours',
      ],
    },
  },
  genetic: {
    id: 'genetic',
    title: 'Genetic Screening & Consultation',
    subtitle: 'Comprehensive Genetic Testing and Expert Counseling',
    iconName: 'Dna',
    description: 'Our genetic screening services provide valuable insights into hereditary conditions, carrier status, and potential health risks. Combined with expert genetic counseling, we help you make informed decisions about your health and family planning.',
    features: [
      'Carrier screening for genetic disorders',
      'Prenatal genetic testing',
      'Hereditary cancer risk assessment',
      'Pharmacogenetic testing',
      'Chromosomal abnormality detection',
      'One-on-one genetic counseling sessions',
    ],
    benefits: [
      'Early detection of genetic conditions',
      'Informed family planning decisions',
      'Personalized health risk assessment',
      'Confidential and compassionate care',
      'Expert interpretation of complex results',
    ],
    process: {
      title: 'Our Approach',
      steps: [
        'Initial consultation to discuss your concerns',
        'Review of family medical history',
        'Recommendation of appropriate genetic tests',
        'Sample collection (blood or saliva)',
        'Laboratory analysis by certified geneticists',
        'Detailed counseling session to discuss results',
      ],
    },
  },
  pregnancy: {
    id: 'pregnancy',
    title: 'Pregnancy & Anomaly Scans',
    subtitle: 'Comprehensive Prenatal Care and Fetal Monitoring',
    iconName: 'Baby',
    description: 'Our specialized pregnancy and anomaly scans provide expectant parents with detailed information about fetal development and well-being. Using advanced ultrasound technology, we monitor your baby\'s growth and detect any potential concerns early.',
    features: [
      'First trimester dating and viability scans',
      'NT scan (11-14 weeks)',
      'Detailed anomaly scan (18-22 weeks)',
      'Growth and well-being scans',
      '3D/4D bonding scans',
      'Doppler studies for placental function',
    ],
    benefits: [
      'Peace of mind throughout pregnancy',
      'Early detection of fetal abnormalities',
      'Accurate dating and due date estimation',
      'Gender determination (if desired)',
      'Beautiful 3D/4D images of your baby',
    ],
    process: {
      title: 'Your Pregnancy Journey',
      steps: [
        'Book your scan at the recommended gestational age',
        'Drink water before the scan (if advised)',
        'Comfortable scanning in a relaxed environment',
        'Detailed examination by experienced sonographer',
        'Immediate discussion of findings',
        'Comprehensive report with images provided',
      ],
    },
  },
  interventional: {
    id: 'interventional',
    title: 'Interventional Procedures',
    subtitle: 'Minimally Invasive Ultrasound-Guided Treatments',
    iconName: 'Stethoscope',
    description: 'Our interventional radiology services offer minimally invasive procedures guided by ultrasound imaging. These advanced techniques provide effective treatment with reduced recovery time, less pain, and minimal scarring compared to traditional surgery.',
    features: [
      'Ultrasound-guided biopsies',
      'Fine needle aspiration (FNA)',
      'Fluid drainage procedures',
      'Joint injections',
      'Abscess drainage',
      'Catheter placements',
    ],
    benefits: [
      'Minimally invasive with small incisions',
      'Reduced risk of complications',
      'Faster recovery time',
      'Performed under local anesthesia',
      'Real-time imaging guidance for precision',
    ],
    process: {
      title: 'Procedure Process',
      steps: [
        'Pre-procedure consultation and consent',
        'Review of medical history and medications',
        'Local anesthesia administration',
        'Ultrasound-guided procedure performed',
        'Post-procedure monitoring and care instructions',
        'Follow-up appointment scheduled if needed',
      ],
    },
  },
  diagnostic: {
    id: 'diagnostic',
    title: 'Diagnostic Imaging',
    subtitle: 'Comprehensive Medical Imaging Services',
    iconName: 'Scan',
    description: 'Our comprehensive diagnostic imaging services encompass a wide range of examinations to help diagnose and monitor various medical conditions. With state-of-the-art equipment and experienced radiologists, we provide accurate and timely diagnostic information.',
    features: [
      'Complete abdominal ultrasound',
      'Pelvic and gynecological imaging',
      'Urological examinations',
      'Soft tissue and lymph node assessment',
      'Pediatric imaging',
      'Emergency diagnostic scans',
    ],
    benefits: [
      'Comprehensive diagnostic coverage',
      'Quick appointment availability',
      'Expert radiologist interpretation',
      'Digital reports for easy sharing',
      'Affordable pricing with transparent costs',
    ],
    process: {
      title: 'Imaging Process',
      steps: [
        'Book your diagnostic scan online or by phone',
        'Receive preparation instructions if needed',
        'Check-in at our reception',
        'Imaging performed by certified technicians',
        'Images reviewed by specialist radiologist',
        'Report delivered within 24-48 hours',
      ],
    },
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceId = params.serviceId as string;
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/#services">
            <Button variant="primary">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.iconName] || Activity;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-medical-lightBlue">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/#services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <Icon className="w-10 h-10 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-neutral-900">
                  {service.title}
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-primary-600 font-medium mb-6">
              {service.subtitle}
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-8">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-lg border border-primary-100 rounded-xl p-6 shadow-md"
              >
                <p className="text-neutral-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-8">
            {service.process.title}
          </h2>
          <div className="space-y-4">
            {service.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                  {index + 1}
                </div>
                <p className="text-neutral-700 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-neutral-900 mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Contact us today to schedule your consultation or learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={WHATSAPP_URL}>
              WhatsApp Us
            </Button>
            <Button variant="outline" href={PHONE_URL}>
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
