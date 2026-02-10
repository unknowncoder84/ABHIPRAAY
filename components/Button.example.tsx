/**
 * Button Component Usage Examples
 * This file demonstrates various ways to use the Button component
 */

import React from 'react';
import { Button } from './Button';

export const ButtonExamples = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With onClick */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive</h2>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={() => alert('Button clicked!')}>
            Click Me
          </Button>
          <Button variant="secondary" onClick={() => console.log('Logged')}>
            Log to Console
          </Button>
        </div>
      </section>

      {/* As Links */}
      <section>
        <h2 className="text-2xl font-bold mb-4">As Links</h2>
        <div className="flex gap-4 flex-wrap">
          <Button href="#home">Home</Button>
          <Button href="#about" variant="secondary">About</Button>
          <Button href="#contact" variant="outline">Contact</Button>
        </div>
      </section>

      {/* Disabled State */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled</h2>
        <div className="flex gap-4 flex-wrap">
          <Button disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </section>

      {/* Without Ripple */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Without Ripple Effect</h2>
        <div className="flex gap-4 flex-wrap">
          <Button ripple={false}>No Ripple</Button>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Real-world Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <Button href="tel:+919653326172" variant="primary">
            📞 Call Now
          </Button>
          <Button href="https://wa.me/919653326172" variant="secondary">
            💬 WhatsApp
          </Button>
          <Button href="mailto:drmoves@gmail.com" variant="outline">
            ✉️ Email Us
          </Button>
        </div>
      </section>

      {/* Form Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Form Buttons</h2>
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
      </section>

      {/* Combination Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Combinations</h2>
        <div className="flex gap-4 flex-wrap">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => alert('Large primary clicked')}
          >
            Large Primary
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            href="#services"
          >
            Small Outline Link
          </Button>
          <Button 
            variant="secondary" 
            size="md" 
            className="shadow-xl"
          >
            Custom Shadow
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonExamples;
