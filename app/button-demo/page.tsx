/**
 * Button Component Demo Page
 * Visual demonstration of all Button component features
 */

import React from 'react';
import { Button } from '@/components/Button';

export default function ButtonDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-medical-lightBlue to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-primary-700 mb-2 font-poppins">
          Button Component Demo
        </h1>
        <p className="text-lg text-neutral-600 mb-12">
          Interactive demonstration of all button variants, sizes, and features
        </p>

        {/* Variants Section */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Variants
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Sizes
          </h2>
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </section>

        {/* Interactive Section */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Interactive Features
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-600 mb-2">
                Click to see ripple effect:
              </p>
              <Button onClick={() => alert('Button clicked!')}>
                Click Me for Alert
              </Button>
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2">
                Hover to see scale animation:
              </p>
              <Button variant="secondary">Hover Over Me</Button>
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-2">
                Button without ripple effect:
              </p>
              <Button variant="outline" ripple={false}>
                No Ripple Effect
              </Button>
            </div>
          </div>
        </section>

        {/* Link Mode Section */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Link Mode
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button href="#home">Home Link</Button>
            <Button href="#about" variant="secondary">
              About Link
            </Button>
            <Button href="#contact" variant="outline">
              Contact Link
            </Button>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Real-world Examples (Hero Section CTAs)
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button href="tel:+919653326172" variant="primary" size="lg">
              📞 Call Now
            </Button>
            <Button href="https://wa.me/919653326172" variant="secondary" size="lg">
              💬 WhatsApp
            </Button>
            <Button href="mailto:drmoves@gmail.com" variant="outline" size="lg">
              ✉️ Email Us
            </Button>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Disabled State
          </h2>
          <div className="flex gap-4 flex-wrap">
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </section>

        {/* Form Buttons */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            Form Buttons
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
            className="space-y-4"
          >
            <div className="flex gap-4 flex-wrap">
              <Button type="submit" variant="primary">
                Submit Form
              </Button>
              <Button type="reset" variant="secondary">
                Reset Form
              </Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </div>
          </form>
        </section>

        {/* All Combinations */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-primary-600 mb-6 font-poppins">
            All Combinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary variants */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary-700">Primary</h3>
              <Button variant="primary" size="sm" className="w-full">
                Small Primary
              </Button>
              <Button variant="primary" size="md" className="w-full">
                Medium Primary
              </Button>
              <Button variant="primary" size="lg" className="w-full">
                Large Primary
              </Button>
            </div>

            {/* Secondary variants */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary-700">Secondary</h3>
              <Button variant="secondary" size="sm" className="w-full">
                Small Secondary
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Medium Secondary
              </Button>
              <Button variant="secondary" size="lg" className="w-full">
                Large Secondary
              </Button>
            </div>

            {/* Outline variants */}
            <div className="space-y-3">
              <h3 className="font-semibold text-primary-700">Outline</h3>
              <Button variant="outline" size="sm" className="w-full">
                Small Outline
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Medium Outline
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Large Outline
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-neutral-500 text-sm mt-12">
          <p>Button Component - ABHIPRAAY Medical Website</p>
          <p className="mt-2">
            ✅ Task 3.1 Complete | Requirements: 1.5, 8.2
          </p>
        </footer>
      </div>
    </main>
  );
}
