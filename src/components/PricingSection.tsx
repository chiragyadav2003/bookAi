import React from 'react';

interface PricingTier {
  plan: string;
  model: string;
  price: string;
}

const pricingTiers: PricingTier[] = [
  { plan: 'Default', model: 'GPT-3.5', price: '$0.0020' },
  { plan: 'OpenAI', model: 'GPT-4', price: '$0.03' },
  { plan: 'Together AI', model: 'Llama-2-70b', price: '$0.0008' },
  { plan: 'Together AI', model: 'Llama-2-13b', price: '$0.0006' },
];

const PricingSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-xl mt-14">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">API Pricing</h2>
      <p className="mb-6 text-center text-gray-800 dark:text-gray-300">
        Pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full mb-6">
          <thead>
            <tr className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              <th className="p-3 text-left">Plan</th>
              <th className="p-3 text-left">Model</th>
              <th className="p-3 text-left">Price per 1k tokens</th>
            </tr>
          </thead>
          <tbody>
            {pricingTiers.map((tier, index) => (
              <tr key={index} className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <td className="p-3 text-gray-800 dark:text-gray-300">{tier.plan}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{tier.model}</td>
                <td className="p-3 text-gray-800 dark:text-gray-300">{tier.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-6">
        * On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
      </p>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Billing</h3>
      <p className="text-gray-800 dark:text-gray-300">
        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
      </p>
    </section>
  );
};

export default PricingSection;
