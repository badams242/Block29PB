const m = async g => {
  try {
      const w = await fetch(`${s}/players/search?name=${g}`);
      if (!w.ok)
          throw new Error("Failed to fetch filtered players");
      const D = await w.json();
      n(D);
  } catch (w) {
      console.error("Error fetching filtered players:", w.message);
  }
}
const p = async g => {
  try {
      if (!window.confirm("Are you sure you want to delete this player?"))
          return;
      const D = await fetch(`${s}/players/delete/${g}`, {
          method: "DELETE"
      });
      if (!D.ok) {
          const f = await D.text();
          throw new Error(`Failed to delete player. Server response: ${f}`);
      }
      alert("Player deleted successfully");
      c();
  } catch (w) {
      console.error(w.message);
      alert("Failed to delete player. Please try again.");
  }
}
const S = async g => {
  try {
      if (!(await fetch("/API/players/create", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(g)
      })).ok)
          throw new Error("Failed to create player");
      c();
  } catch (w) {
      console.error("Error creating player:", w.message);
  }
}