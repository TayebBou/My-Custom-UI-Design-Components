import { FC } from "react";
import styles from "./PropsDocumentation.module.scss";

type PropItem = {
  name: string;
  type: string;
  description: string;
  inputType: string;
  options?: string[];
  defaultValue?: string;
};

type PropsDocumentationProps = {
  propsArray: PropItem[];
  onPropChange?: (propName: string, value: boolean | string) => void;
};

const PropsDocumentation: FC<PropsDocumentationProps> = ({
  propsArray,
  onPropChange,
}) => {
  const handleInputChange = (propName: string, value: boolean | string) => {
    onPropChange && onPropChange(propName, value);
  };

  return (
    <div>
      <h3>Props Documentation</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.header}>Prop Name</th>
            <th className={styles.header}>Type</th>
            <th className={styles.header}>Description</th>
            <th className={styles.header}>Modify</th>
          </tr>
        </thead>
        <tbody>
          {propsArray.map((prop, index) => (
            <tr key={index}>
              <td className={styles.cell}>{prop.name}</td>
              <td className={styles.cell}>{prop.type}</td>
              <td className={styles.cell}>{prop.description}</td>
              <td className={styles.cell}>
                {prop.inputType === "checkbox" && (
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    onChange={(e) =>
                      handleInputChange(prop.name, e.target.checked)
                    }
                  />
                )}

                {prop.inputType === "select" && prop.options && (
                  <select
                    className={styles.select}
                    defaultValue={prop.defaultValue}
                    onChange={(e) =>
                      handleInputChange(prop.name, e.target.value)
                    }
                  >
                    {prop.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                {prop.inputType === "text" && (
                  <input
                    type="text"
                    defaultValue={prop.defaultValue}
                    className={styles.textInput}
                    onChange={(e) =>
                      handleInputChange(prop.name, e.target.value)
                    }
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsDocumentation;
