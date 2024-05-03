import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./AutoComplete.css";
import { getHighlightedText } from "@/utils/highlight";

interface AutocompleteProps {
  value: string;
  data: string[];
  state: "loading" | "error" | "data";
  error?: string;
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
}

export default function Autocomplete({
  value,
  data,
  state,
  error,
  onChange,
  onSelect,
}: AutocompleteProps) {
  const [showPopup, setShowPopup] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
    if (e.target.value.length > 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }

  function onFocus() {
    if (value.length > 0) {
      setShowPopup(true);
    }
  }

  function handleSelectItem(item: string) {
    setShowPopup(false);
    onSelect(item);
  }

  function renderPopup() {
    // Not showing the popup when there is no data
    if (state === "data" && data.length <= 0) return null;

    return (
      <div ref={popupRef} className="autocomplete-popup-container">
        {state === "loading" && <p>Loading...</p>}
        {state === "error" && <p>{error}</p>}
        {state === "data" && (
          <ul>
            {data.map((item, index) => (
              <li
                key={`${item}-${index}`}
                onClick={() => handleSelectItem(item)}
              >
                {getHighlightedText(item, value)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  useEffect(() => {
    function onClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (
        inputRef.current &&
        !inputRef.current.contains(target) &&
        popupRef.current &&
        !popupRef.current.contains(target)
      ) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="autocomplete-container">
      <input
        ref={inputRef}
        value={value}
        placeholder="Cool"
        onChange={handleInputChange}
        onFocus={onFocus}
        id="autocomplete-input"
      />
      {showPopup && renderPopup()}
    </div>
  );
}
