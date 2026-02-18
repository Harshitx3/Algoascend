import course1 from "@/assets/courses/courses1.jpg";


const coursesData = [
  {
    id: 1,
    price: "₹1,000,000",
    image: course1,
    features: ["Courses", "Courses", "Courses"],
  },
  {
    id: 2,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 3,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 4,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 5,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 6,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 7,
    price: "₹500,000",
    image: course1,
    features: ["Feature A", "Feature B", "Feature C"],
  },
];


export default function CoursesList() {
  return (
    <div className="mt-20 w-full flex justify-center items-center coursespage">
      <div className="grid grid-cols-3 gap-x-50 gap-y-20">
        {coursesData.map((course) => (
          <div className="card" key={course.id}>
            <div className="imgBx" style={{ backgroundImage: `url(${course.image})` }}></div>
            <div className="content">
              <span className="price">
                <a href="#">{course.price}</a>
              </span>
              <ul>
                {course.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
