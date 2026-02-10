import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { serviceId: string } }): Promise<Metadata> {
  const serviceId = params.serviceId;
  
  const titles: Record<string, string> = {
    ultrasound: 'Advanced Ultrasound Imaging | ABHIPRAAY',
    genetic: 'Genetic Screening & Consultation | ABHIPRAAY',
    pregnancy: 'Pregnancy & Anomaly Scans | ABHIPRAAY',
    interventional: 'Interventional Procedures | ABHIPRAAY',
    diagnostic: 'Diagnostic Imaging | ABHIPRAAY',
  };

  const descriptions: Record<string, string> = {
    ultrasound: 'State-of-the-art ultrasound imaging services with high-resolution 4D technology for accurate diagnostic imaging in Mumbai.',
    genetic: 'Comprehensive genetic screening and expert consultation services for hereditary conditions and family planning.',
    pregnancy: 'Specialized pregnancy and anomaly scans with advanced ultrasound technology for prenatal care and fetal monitoring.',
    interventional: 'Minimally invasive ultrasound-guided procedures with reduced recovery time and precision treatment.',
    diagnostic: 'Comprehensive diagnostic imaging services with state-of-the-art equipment and expert radiologist interpretation.',
  };

  return {
    title: titles[serviceId] || 'Services | ABHIPRAAY',
    description: descriptions[serviceId] || 'Premium medical services at ABHIPRAAY Centre for Advanced Ultrasound Guided Interventions and Genetic Clinic',
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
