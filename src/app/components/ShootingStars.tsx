const stars = [
  { top: "5%",  left: "75%", delay: "0s",    duration: "8s",   width: 100 },
  { top: "2%",  left: "55%", delay: "2s",    duration: "9s",   width: 80  },
  { top: "12%", left: "85%", delay: "4.5s",  duration: "10s",  width: 120 },
  { top: "8%",  left: "65%", delay: "1s",    duration: "7.5s", width: 90  },
  { top: "3%",  left: "90%", delay: "6s",    duration: "8.5s", width: 70  },
  { top: "22%", left: "70%", delay: "3s",    duration: "9.5s", width: 110 },
  { top: "6%",  left: "45%", delay: "7s",    duration: "7s",   width: 85  },
  { top: "18%", left: "80%", delay: "5s",    duration: "11s",  width: 95  },
  { top: "10%", left: "35%", delay: "1.7s",  duration: "8.2s", width: 88  },
  { top: "28%", left: "60%", delay: "3.5s",  duration: "9.8s", width: 105 },
  { top: "1%",  left: "92%", delay: "5.8s",  duration: "7.3s", width: 75  },
  { top: "25%", left: "50%", delay: "0.5s",  duration: "10.5s",width: 115 },
  { top: "4%",  left: "30%", delay: "8.2s",  duration: "8.8s", width: 92  },
  { top: "15%", left: "78%", delay: "2.8s",  duration: "7.8s", width: 82  },
  { top: "30%", left: "88%", delay: "6.5s",  duration: "9.2s", width: 98  },
  { top: "0%",  left: "62%", delay: "4.2s",  duration: "8s",   width: 78  },
];

export default function ShootingStars() {
  return (
    <div className="stars-container">
      {stars.map((star, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
