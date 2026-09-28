import { useEffect, useMemo, useState } from "react";

const LeetCodeHeatmap = () => {
  const username = "Pr27-2004Paul";

  const [calendar, setCalendar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // Fetch LeetCode calendar
  // --------------------------------------------------

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/calendar`
        );

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();

        console.log("FULL API RESPONSE:", data);

        /*
         * The API can return the calendar in different
         * structures depending on the API version.
         */

        let rawCalendar =
          data?.submissionCalendar ??
          data?.calendar ??
          data?.data?.submissionCalendar ??
          data?.data?.calendar ??
          data;

        /*
         * IMPORTANT:
         *
         * submissionCalendar can itself be a JSON STRING.
         *
         * Example:
         *
         * "{\"1727568000\":2,\"1727654400\":5}"
         *
         * So we need JSON.parse().
         */

        if (typeof rawCalendar === "string") {
          try {
            rawCalendar = JSON.parse(rawCalendar);
          } catch (parseError) {
            console.error(
              "Could not parse calendar JSON:",
              parseError
            );

            throw new Error(
              "Invalid calendar data received from API."
            );
          }
        }

        if (
          !rawCalendar ||
          typeof rawCalendar !== "object" ||
          Array.isArray(rawCalendar)
        ) {
          throw new Error("Invalid calendar format.");
        }

        console.log("PARSED CALENDAR:", rawCalendar);

        setCalendar(rawCalendar);
      } catch (err) {
        console.error("LeetCode API error:", err);
        setError(err.message || "Unable to load LeetCode activity.");
      } finally {
        setLoading(false);
      }
    };

    fetchCalendar();
  }, []);

  // --------------------------------------------------
  // Convert API timestamps into dates
  // --------------------------------------------------

  const allDays = useMemo(() => {
    return Object.entries(calendar)
      .map(([timestamp, count]) => {
        const numericTimestamp = Number(timestamp);
        const numericCount = Number(count);

        if (
          !Number.isFinite(numericTimestamp) ||
          !Number.isFinite(numericCount)
        ) {
          return null;
        }

        const date = new Date(numericTimestamp * 1000);

        if (Number.isNaN(date.getTime())) {
          return null;
        }

        return {
          date: date.toISOString().split("T")[0],
          count: numericCount,
        };
      })
      .filter(Boolean)
      .sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime()
      );
  }, [calendar]);

  // --------------------------------------------------
  // Generate last 365 days
  // --------------------------------------------------

  const heatmapDays = useMemo(() => {
    const result = [];

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);

      date.setDate(today.getDate() - i);

      const dateString = date.toISOString().split("T")[0];

      const existingDay = allDays.find(
        (day) => day.date === dateString
      );

      result.push({
        date: dateString,
        count: existingDay ? existingDay.count : 0,
      });
    }

    return result;
  }, [allDays]);

  // --------------------------------------------------
  // Total submissions in last 365 days
  // --------------------------------------------------

  const totalSubmissions = useMemo(() => {
    return heatmapDays.reduce(
      (total, day) => total + day.count,
      0
    );
  }, [heatmapDays]);

  // --------------------------------------------------
  // Active days in last 365 days
  // --------------------------------------------------

  const activeDays = useMemo(() => {
    return heatmapDays.filter(
      (day) => day.count > 0
    ).length;
  }, [heatmapDays]);

  // --------------------------------------------------
  // Maximum streak
  // --------------------------------------------------

  const maxStreak = useMemo(() => {
    let currentStreak = 0;
    let longestStreak = 0;

    heatmapDays.forEach((day) => {
      if (day.count > 0) {
        currentStreak++;

        longestStreak = Math.max(
          longestStreak,
          currentStreak
        );
      } else {
        currentStreak = 0;
      }
    });

    return longestStreak;
  }, [heatmapDays]);

  // --------------------------------------------------
  // Get square color
  // --------------------------------------------------

  const getColor = (count) => {
    if (count === 0) {
      return "bg-[#2d2d2d]";
    }

    if (count <= 2) {
      return "bg-[#0e4429]";
    }

    if (count <= 5) {
      return "bg-[#006d32]";
    }

    if (count <= 10) {
      return "bg-[#26a641]";
    }

    return "bg-[#39d353]";
  };

  // --------------------------------------------------
  // Loading
  // --------------------------------------------------

  if (loading) {
    return (
      <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
        

        <div className="bg-[#1f1f1f] rounded-xl p-5">
          <p className="text-gray-400">
            Loading LeetCode activity...
          </p>
        </div>
      </section>
    );
  }

  // --------------------------------------------------
  // Error
  // --------------------------------------------------

  if (error) {
    return (
      <section className="py-8 max-md:py-[30px] border-b border-[#303030]">
        

        <div className="bg-[#1f1f1f] rounded-xl p-5">
          <p className="text-red-400">
            {error}
          </p>
        </div>
      </section>
    );
  }

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <section
      id="leetcode"
      className="py-8 max-md:py-[30px] border-b border-[#303030]"
    >
      {/* Heading */}


      <div className="bg-[#1f1f1f] rounded-xl p-5 md:p-6">

       

        {/* ------------------------------------------ */}
        {/* Heatmap */}
        {/* ------------------------------------------ */}

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent">

          <div className="w-max">

            {/* Month labels */}

            <div className="flex mb-2 ml-[1px]">

              {Array.from({ length: 12 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="w-[48px] text-[12px] text-[#9ca3af]"
                  >
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][index]}
                  </div>
                )
              )}

            </div>

            {/* Contribution squares */}

            <div
              className="
                grid
                grid-flow-col
                grid-rows-7
                auto-cols-[12px]
                gap-[4px]
              "
            >

              {heatmapDays.map(
                ({ date, count }) => (
                  <div
                    key={date}
                    title={`${date} — ${count} submission${
                      count === 1 ? "" : "s"
                    }`}
                    className={`
                      w-[12px]
                      h-[12px]
                      rounded-[3px]
                      ${getColor(count)}
                      transition-all
                      duration-150
                      hover:scale-125
                      hover:ring-1
                      hover:ring-white/40
                    `}
                  />
                )
              )}

            </div>

          </div>

        </div>

        {/* ------------------------------------------ */}
        {/* Legend */}
        {/* ------------------------------------------ */}

        <div className="flex items-center justify-end gap-2 mt-5">

          <span className="text-xs text-[#6f7b8b]">
            Less
          </span>

          <div className="w-[12px] h-[12px] rounded-[3px] bg-[#2d2d2d]" />

          <div className="w-[12px] h-[12px] rounded-[3px] bg-[#0e4429]" />

          <div className="w-[12px] h-[12px] rounded-[3px] bg-[#006d32]" />

          <div className="w-[12px] h-[12px] rounded-[3px] bg-[#26a641]" />

          <div className="w-[12px] h-[12px] rounded-[3px] bg-[#39d353]" />

          <span className="text-xs text-[#6f7b8b]">
            More
          </span>

        </div>

      </div>
    </section>
  );
};

export default LeetCodeHeatmap;