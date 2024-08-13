// components/ContentContainer.js
export default function ContentContainer({ children }) {
        return (
          <div className="flex-grow p-8 bg-white text-black">
            {children}
          </div>
        );
      }
      