export default (input: string) => {
  try {
    let date = new Date(input);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date input");
    }

    const now = new Date();

    // Strip time for comparison
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffMs = today.getTime() - target.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    // ---- FORMAT DECISION ----
    let relativeFormat = "";

    const year = date.getFullYear();

    if (diffDays === 0) {
      relativeFormat = "Today";
    } else if (diffDays === 1) {
      relativeFormat = "Yesterday";
    } else if (diffDays > 1 && diffDays < 7) {
      // Example: "Mon 2025"
      const weekday = date.toLocaleDateString("en-US", {
        weekday: "short",
      });
      relativeFormat = `${weekday}, ${year}`;
    } else {
      // Example: "24 Nov 2025"
      const dayMonth = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });
      relativeFormat = `${dayMonth}, ${year}`;
    }

    // Time format
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Full date (Month Day, Year)
    const formattedDate = date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .toUpperCase();

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    return {
      time,
      date: formattedDate,
      fullDateTime: `${formattedDate} ${time}`,
      date1: `${yyyy}-${mm}-${dd}`,
      relative: relativeFormat,
    };
  } catch (error) {
    log.error(error);
    return {
      time: "",
      date: "",
      fullDateTime: "",
      date1: "",
      relative: "",
    };
  }
};
