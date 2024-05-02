interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Autocomplete({ value, onChange }: AutocompleteProps) {
  return (
    <div className="autocomplete-container">
      <input
        value={value}
        placeholder="Cool"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
