"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [defaultMode, setDefaultMode] = useState<"validate" | "plan">(
    "validate",
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Default Mode</label>
        <select
          value={defaultMode}
          onChange={(e) =>
            setDefaultMode(e.target.value as "validate" | "plan")
          }
          className="p-2 border rounded"
        >
          <option value="validate">Validate Ideas</option>
          <option value="plan">Plan MVP</option>
        </select>
      </div>
    </div>
  );
}
