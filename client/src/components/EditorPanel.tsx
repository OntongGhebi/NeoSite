/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface SelectedElement {
  tagName: string;
  className: string;
  text: string;
  styles: {
    padding: string;
    margin: string;
    backgroundColor: string;
    color: string;
    fontSize: string;
  };
}

interface EditorPanelProps {
  selectedElement: SelectedElement | null;
  onUpdate: (payload: {
    text?: string;
    className?: string;
    styles?: Partial<SelectedElement["styles"]>;
  }) => void;
  onClose: () => void;
}

const EditorPanel = ({
  selectedElement,
  onUpdate,
  onClose,
}: EditorPanelProps) => {
  const [values, setValues] = useState<SelectedElement | null>(null);

  useEffect(() => {
    if (selectedElement) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValues(selectedElement);
    }
  }, [selectedElement]);

  if (!values) return null;

  /* -----------------------------
   * TEXT / CLASSNAME HANDLER
   * ----------------------------- */
  const handleFieldChange = (field: "text" | "className", value: string) => {
    const newValues = { ...values, [field]: value };
    setValues(newValues);
    onUpdate({ [field]: value });
  };

  /* -----------------------------
   * STYLE HANDLER
   * ----------------------------- */
  const handleStyleChange = (
    styleName: keyof SelectedElement["styles"],
    value: string
  ) => {
    const newStyles = {
      ...values.styles,
      [styleName]: value,
    };

    setValues({
      ...values,
      styles: newStyles,
    });

    onUpdate({
      styles: {
        [styleName]: value,
      },
    });
  };

  return (
    <div className="absolute top-4 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 animate-in fade-in slide-in-from-right-5">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Edit Element</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="space-y-4 text-black">
        {/* TEXT */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Text Content
          </label>
          <textarea
            value={values.text}
            onChange={(e) => handleFieldChange("text", e.target.value)}
            className="w-full text-sm p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none min-h-20"
          />
        </div>

        {/* CLASSNAME */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Class Name
          </label>
          <input
            type="text"
            value={values.className}
            onChange={(e) => handleFieldChange("className", e.target.value)}
            className="w-full text-sm p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        {/* PADDING & MARGIN */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500">
              Padding
            </label>
            <input
              type="text"
              value={values.styles.padding}
              onChange={(e) => handleStyleChange("padding", e.target.value)}
              className="w-full text-sm p-2 border border-gray-400 rounded-md"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500">
              Margin
            </label>
            <input
              type="text"
              value={values.styles.margin}
              onChange={(e) => handleStyleChange("margin", e.target.value)}
              className="w-full text-sm p-2 border border-gray-400 rounded-md"
            />
          </div>
        </div>

        {/* FONT SIZE */}
        <div>
          <label className="block text-xs font-medium text-gray-500">
            Font Size
          </label>
          <input
            type="text"
            value={values.styles.fontSize}
            onChange={(e) => handleStyleChange("fontSize", e.target.value)}
            className="w-full text-sm p-2 border border-gray-400 rounded-md"
          />
        </div>

        {/* COLORS */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500">
              Background
            </label>
            <input
              type="color"
              value={values.styles.backgroundColor}
              onChange={(e) =>
                handleStyleChange("backgroundColor", e.target.value)
              }
              className="w-full h-10 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500">
              Text Color
            </label>
            <input
              type="color"
              value={values.styles.color}
              onChange={(e) => handleStyleChange("color", e.target.value)}
              className="w-full h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
