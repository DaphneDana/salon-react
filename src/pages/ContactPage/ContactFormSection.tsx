import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactFormSection.module.css';

// Define the validation schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .regex(/^\+?[0-9\s-]+$/, { message: 'Invalid phone number format' }) // Allows digits, spaces, hyphens, optional +
    .optional().or(z.literal('')), // Optional field
  serviceInterest: z.string().optional(),
  preferredDate: z.string().optional(), // Could use a date picker type later
  preferredTime: z.string().optional(), // Could use a time picker type later
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }).max(500, { message: 'Message cannot exceed 500 characters'}),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

// Placeholder for services - in a real app, this might come from an API
const servicesList = [
  'Hair Styling', 'Hair Coloring', 'Makeup', 'Nail Care', 'Facial Treatments', 'Bridal Packages', 'Other'
];

const ContactFormSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset, // To clear the form after successful submission
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched', // Validate on blur
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log('Form Data:', data); // Log data for now

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Replace with actual API submission logic
    // For example:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     reset(); // Clear form fields
    //   } else {
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    // }

    // Simulated success/error for demo
    const didSucceed = Math.random() > 0.3; // Simulate success/failure
    if (didSucceed) {
        setSubmitStatus('success');
        reset();
    } else {
        setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  // Helper to determine if a field has content (for floating label)
  const hasValue = (fieldName: keyof ContactFormInputs) => {
     // For react-hook-form, we might need to watch the field value
     // or check if it's in touchedFields and has no error, but for pure CSS floating labels,
     // :placeholder-shown pseudo-class is often used.
     // Here, we'll just rely on the placeholder-shown approach in CSS or
     // explicitly add a class if a value is typed.
     // This example will use CSS :placeholder-shown.
     return false; // Not strictly needed if using CSS :placeholder-shown
  };


  return (
    <section className={`${styles.contactFormSection} section-padding`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <p className={styles.sectionSubtitle}>
          Have a question or ready to book? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          {/* Name Field */}
          <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
            <input
              type="text"
              id="name"
              placeholder=" " /* Important for :placeholder-shown trick */
              className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
              {...register('name')}
            />
            <label htmlFor="name" className={styles.floatingLabel}>Full Name</label>
            {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
            <input
              type="email"
              id="email"
              placeholder=" "
              className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
              {...register('email')}
            />
            <label htmlFor="email" className={styles.floatingLabel}>Email Address</label>
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </div>

          {/* Phone Field (Optional) */}
          <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
            <input
              type="tel"
              id="phone"
              placeholder=" "
              className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
              {...register('phone')}
            />
            <label htmlFor="phone" className={styles.floatingLabel}>Phone Number (Optional)</label>
            {errors.phone && <p className={styles.errorMessage}>{errors.phone.message}</p>}
          </div>

          {/* Service Interest Field (Select) */}
          <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
            <select
              id="serviceInterest"
              className={`${styles.formSelect} ${errors.serviceInterest ? styles.inputError : ''}`}
              {...register('serviceInterest')}
              defaultValue="" // Important for the label to float correctly initially
            >
              <option value="" disabled>Select a Service (Optional)</option>
              {servicesList.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {/* Label for select is handled differently, often not floating or needs JS */}
            {/* For simplicity with CSS floating labels, we might style this one slightly differently or use a custom select */}
            <label htmlFor="serviceInterest" className={`${styles.floatingLabel} ${styles.selectLabel}`}>Service Interest (Optional)</label>
            {errors.serviceInterest && <p className={styles.errorMessage}>{errors.serviceInterest.message}</p>}
          </div>

         <div className={styles.dateTimeRow}>
             {/* Preferred Date Field */}
             <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
                 <input
                     type="date" // Using HTML5 date picker
                     id="preferredDate"
                     placeholder=" "
                     className={`${styles.formInput} ${errors.preferredDate ? styles.inputError : ''}`}
                     {...register('preferredDate')}
                 />
                 <label htmlFor="preferredDate" className={`${styles.floatingLabel} ${styles.dateLabel}`}>Preferred Date (Optional)</label>
                 {errors.preferredDate && <p className={styles.errorMessage}>{errors.preferredDate.message}</p>}
             </div>

             {/* Preferred Time Field */}
             <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
                 <input
                     type="time" // Using HTML5 time picker
                     id="preferredTime"
                     placeholder=" "
                     className={`${styles.formInput} ${errors.preferredTime ? styles.inputError : ''}`}
                     {...register('preferredTime')}
                 />
                 <label htmlFor="preferredTime" className={`${styles.floatingLabel} ${styles.timeLabel}`}>Preferred Time (Optional)</label>
                 {errors.preferredTime && <p className={styles.errorMessage}>{errors.preferredTime.message}</p>}
             </div>
         </div>


          {/* Message Field */}
          <div className={`${styles.formGroup} ${styles.floatingLabelGroup}`}>
            <textarea
              id="message"
              placeholder=" "
              rows={5}
              className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
              {...register('message')}
            ></textarea>
            <label htmlFor="message" className={styles.floatingLabel}>Your Message</label>
            {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? (
              <span className={styles.loadingSpinner}></span>
            ) : (
              'Send Message'
            )}
          </button>

          {submitStatus === 'success' && (
            <p className={styles.successMessage}>
              Thank you! Your message has been sent successfully. We'll be in touch soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className={styles.submitErrorMessage}>
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;