
import Navbar from '@/componets/navbar';

import Footer from '@/componets/footer';
import ContentContainer from '@/componets/ContentContainer';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ContentContainer>
        <h1 className="text-3xl font-bold mb-4">Welcome to APTO API</h1>
        <p className="mb-4">
          APTO API offers a wide range of APIs to help you integrate powerful features into your applications with ease.
        </p>
        <p>
          Explore our features and see how we can help you accelerate your development process.
        </p>
      </ContentContainer>
      <Footer />
    </div>
  );
}
