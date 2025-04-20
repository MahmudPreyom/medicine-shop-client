'use client';

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: 'Amit S.',
    rating: 5,
    comment: 'Super fast delivery and genuine medicines. Highly recommend MediMart!',
  },
  {
    id: 2,
    name: 'Neha R.',
    rating: 4,
    comment: 'Easy to search and order. Packaging was clean and professional.',
  },
  {
    id: 3,
    name: 'Rahul K.',
    rating: 5,
    comment: 'Excellent customer service and reliable products.',
  },
  {
    id: 4,
    name: 'Priya M.',
    rating: 4,
    comment: 'App is simple to use. Delivery was on time and well-handled.',
  },
  {
    id: 5,
    name: 'Suresh V.',
    rating: 5,
    comment: 'MediMart is now my go-to for all my prescriptions. Trustworthy!',
  },
  {
    id: 6,
    name: 'Anjali D.',
    rating: 5,
    comment: 'Loved the experience. Clear instructions and very prompt!',
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
          <p className="text-gray-600 text-lg">Hear what our happy customers have to say</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">{review.name}</h4>
                  <div className="text-yellow-500 text-sm">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}