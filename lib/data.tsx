
export const links = [
    {
      name: "Naslovna",
      hash: "#naslovna",
    },
    {
      name: "Pogodnosti",
      hash: "#pogodnosti",
    },
    {
      name: "Cjenovnik",
      hash: "#cjenovnik",
    },
    {
      name: "Pitanja",
      hash: "#pitanja",
    },
    
  ] as const;

 export const faqs = [
    {
      question: "What is Ordinacija CMS?",
      answer:
        "Ordinacija CMS is a comprehensive Content Management System designed specifically for medical practices in Bosnia. It helps streamline patient management, appointment scheduling, and billing processes.",
    },
    {
      question: "How long is the free trial period?",
      answer:
        "We offer a 14-day free trial period for Ordinacija CMS. During this time, you can explore all features and functionalities without any commitment.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "Is my data secure with Ordinacija CMS?",
      answer:
        "Absolutely. We prioritize the security and privacy of your data. Ordinacija CMS uses state-of-the-art encryption and follows all relevant data protection regulations.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide customer support via email for all our users. Additionally, yearly subscribers get priority support.",
    },
    {
      question: "Can I import my existing patient data?",
      answer:
        "Yes, Ordinacija CMS supports data import from various formats. Our support team can assist you with the data migration process.",
    },
    {
      question: "My question is not answered here?",
      answer:  (
        <>
          Go ahead and contact us at{" "}
          <a
            href="mailto:spark.studio.dev@gmail.com"
            className="text-primary-accent hover:underline"
          >
            spark.studio.dev@gmail.com
          </a>{" "}
          and we will answer any question you might have about the platform or our team!
        </>
      ),
    },
  ]  as const
  