import React, { useState, useRef, useEffect } from 'react';

const FAQS: { question: string; answer: string }[] = [
  { question: 'What is this portfolio about?', answer: 'This is the personal portfolio of Pintoo Safi, showcasing projects, AI art, and more.' },
  { question: 'How can I contact you?', answer: 'You can use the contact form at the bottom of the page or email me directly.' },
  { question: 'What technologies do you use?', answer: 'This portfolio is built with React, TypeScript, Vite, and Tailwind CSS.' },
  { question: 'Can I see your coding projects?', answer: 'Yes! Check out the Coding Projects section for details and links.' },
  { question: 'Do you offer freelance work?', answer: 'Yes, I am open to freelance opportunities. Please reach out via the contact form.' },
  { question: 'What is the background music?', answer: 'The background music is a royalty-free track included for ambiance.' },
  // Add more FAQs as needed
];

function findAnswer(userInput: string): string {
  const input = userInput.toLowerCase();
  for (const faq of FAQS) {
    if (input.includes(faq.question.toLowerCase().split(' ')[0])) {
      return faq.answer;
    }
    // Fuzzy match: check if any keyword in the question is in the input
    const keywords = faq.question.toLowerCase().split(' ');
    if (keywords.some(word => input.includes(word))) {
      return faq.answer;
    }
  }
  return "Sorry, I don't know the answer to that. Try asking something else!";
}

const FAQBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([
    { from: 'bot', text: 'Hi! I am your FAQ bot. Ask me anything about this portfolio.' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(msgs => [...msgs, { from: 'user', text: trimmed }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: findAnswer(trimmed) }]);
    }, 500);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close FAQ chat' : 'Open FAQ chat'}
      >
        {open ? (
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m4-4v4m0 0l-2-2m2 2l2-2" /></svg>
        )}
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-blue-600 rounded-t-2xl text-white font-bold">FAQ Chatbot</div>
          <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2" style={{ maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100' : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-bl-2xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
              autoFocus
            />
            <button type="submit" className="px-4 text-blue-600 font-bold hover:text-blue-800">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default FAQBot; 