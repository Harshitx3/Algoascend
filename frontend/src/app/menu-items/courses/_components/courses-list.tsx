import course1 from "@/assets/courses/courses1.jpg";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { loadRazorpayCheckout, openCheckout } from "@/lib/razorpay";

const courseGroups = [
  {
    groupName: "Foundations Track",
    courses: [
      {
        id: 1,
        price: "₹1,000",
        image: course1,
        features: ["Programming with Python – Beginner to Advanced", "Description",],
      },
      {
        id: 2,
        price: "₹500",
        image: course1,
        features: ["Data Structures & Algorithms Mastery", "Description",],
      },
      {
        id: 3,
        price: "₹500",
        image: course1,
        features: ["System Design Fundamentals", "Description",],
      },
      {
        id: 4,
        price: "₹500",
        image: course1,
        features: ["Git, Linux & Developer Tools Bootcamp", "Description",],
      },
    ],
  },

  {
    groupName: "Software Engineering Track",
    courses: [
      {
        id: 5,
        price: "₹500,000",
        image: course1,
        features: ["Java Full Stack Development Program", "Description",],
      },
      {
        id: 6,
        price: "₹500,000",
        image: course1,
        features: ["Backend Engineering with Spring Boot", "Description",],
      },
      {
        id: 7,
        price: "₹500,000",
        image: course1,
        features: ["Frontend Engineering with React", "Description",],
      },
      {
        id: 8,
        price: "₹500,000",
        image: course1,
        features: ["REST API & Microservices Development", "Description",],
      },
      {
        id: 9,
        price: "₹500,000",
        image: course1,
        features: ["DevOps & Cloud Deployment (Docker + AWS)", "Description",],
      },
    ],
  },

  {
    groupName: "Data & Analytics Track",
    courses: [
      {
        id: 10,
        price: "₹500,000",
        image: course1,
        features: ["Data Analytics Professional Program", "Description",],
      },
      {
        id: 11,
        price: "₹500,000",
        image: course1,
        features: ["SQL for Data Professionals", "Description",],
      },
      {
        id: 12,
        price: "₹500,000",
        image: course1,
        features: ["Advanced Excel for Business Intelligence", "Description",],
      },
      {
        id: 13,
        price: "₹500,000",
        image: course1,
        features: ["Power BI & Tableau Dashboard Mastery", "Description",],
      },
      {
        id: 14,
        price: "₹500,000",
        image: course1,
        features: ["Data Engineering with Kafka & Spark", "Description",],
      },
    ],
  },

  {
    groupName: "AI & Machine Learning Track",
    courses: [
      {
        id: 15,
        price: "₹500,000",
        image: course1,
        features: ["Machine Learning Engineering Program", "Description",],
      },
      {
        id: 16,
        price: "₹500,000",
        image: course1,
        features: ["Deep Learning & Computer Vision", "Description",],
      },
      {
        id: 17,
        price: "₹500,000",
        image: course1,
        features: ["MLOps & Production ML Systems", "Description",],
      },
      {
        id: 18,
        price: "₹500,000",
        image: course1,
        features: ["AI Model Deployment", "Description",],
      },
    ],
  },

  {
    groupName: "Generative AI & LLM Track",
    courses: [
      {
        id: 19,
        price: "₹500,000",
        image: course1,
        features: ["Generative AI Engineering Program", "Description",],
      },
      {
        id: 20,
        price: "₹500,000",
        image: course1,
        features: ["Transformer Architecture & LLM Fundamentals", "Description",],
      },
      {
        id: 21,
        price: "₹500,000",
        image: course1,
        features: ["Retrieval-Augmented Generation (RAG) Systems", "Description",],
      },
    ],
  },

  {
    groupName: "Agentic AI Track (Flagship)",
    courses: [
      {
        id: 23,
        price: "₹500,000",
        image: course1,
        features: ["Multi-Agent Architectures", "Description",],
      },
      {
        id: 24,
        price: "₹500,000",
        image: course1,
        features: ["Agentic AI", "Description",],
      },
      {
        id: 25,
        price: "₹500,000",
        image: course1,
        features: ["Advanced AI System Design", "Description",],
      },
    ],
  },

  {
    groupName: "Career Acceleration Track",
    courses: [
      {
        id: 26,
        price: "₹500,000",
        image: course1,
        features: ["FAANG Interview Preparation (DSA + System Design)", "Description",],
      },
      {
        id: 27,
        price: "₹500,000",
        image: course1,
        features: ["AI Startup Builder Program", "Description",],
      },
      {
        id: 28,
        price: "₹500,000",
        image: course1,
        features: ["Resume, LinkedIn & Personal Branding Mastery", "Description",],
      },
      {
        id: 29,
        price: "₹500,000",
        image: course1,
        features: ["Open Source & Research Publishing Bootcamp", "Description",],
      },
    ],
  },
];



export default function CoursesList() {
  function rupeesToPaise(str: string) {
    const clean = str.replace(/[^\d]/g, "");
    const rupees = parseInt(clean, 10);
    return rupees * 100;
  }

  async function handleBuy(course: { id: number; price: string; features: string[] }) {
    const userId = localStorage.getItem("userId") || "guest";
    const amount = rupeesToPaise(course.price);

    const loaded = await loadRazorpayCheckout();
    if (!loaded) {
      alert("Failed to load Razorpay");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/payment/create-order", {
        courseId: String(course.id),
        amount,
        userId,
      });

      const { orderId, key_id, currency } = res.data;
      const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

      openCheckout(
        {
          key: key_id,
          amount,
          currency,
          name: "Algoascend",
          description: course.features[0] || "Course",
          order_id: orderId,
          prefill: {
            name: user.name || "",
            email: user.email || "",
            contact: user.mobile || "",
          },
        },
        async (resp) => {
          try {
            const verify = await axios.post("http://127.0.0.1:5000/api/payment/verify", {
              razorpay_order_id: resp.razorpay_order_id,
              razorpay_payment_id: resp.razorpay_payment_id,
              razorpay_signature: resp.razorpay_signature,
              courseId: String(course.id),
              userId,
            });
            if (verify.data?.success) {
              alert("Payment successful. Course unlocked!");
            } else {
              alert("Payment verification failed");
            }
          } catch (err: any) {
            console.error("Verification error:", err);
            alert("Payment verification error: " + (err.response?.data?.error || err.message));
          }
        },
        () => {
          alert("Payment popup closed");
        }
      );
    } catch (err: any) {
      console.error("Order creation error:", err);
      alert("Order creation failed: " + (err.response?.data?.error || err.message));
    }
  }

  return (
    <div className="mt-20 w-full flex flex-col items-center coursespage gap-32">

      {courseGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="w-full pl-20">

          {/* GROUP TITLE */}
          <h2 className="text-3xl font-bold mb-10 text-start text-muted-foreground">
            {group.groupName}
          </h2>

          {/* GROUP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {group.courses.map((course) => (
              <div className="card" key={course.id}>
                <div
                  className="imgBx"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>

                <div className="content">
                  <span className="price">
                    <a href="#">{course.price}</a>
                  </span>
                  <ul>
                    {course.features.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="button-group">
                    <button className="wishlist-btn">
                      WishList
                    </button>
                    <button className="add-to-cart-btn">
                      Add to card
                    </button>
                    <button
                      className="buy-now-btn"
                      onClick={() => handleBuy(course)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}
