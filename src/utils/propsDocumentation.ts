export const buttonPropsDocumentation = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content inside the button, usually text or an icon.",
    inputType: "none",
  },
  {
    name: "onClick",
    type: "() => void",
    description: "The function to handle button click events. Optional.",
    inputType: "none",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS class for styling the button. Optional.",
    inputType: "none",
  },
  {
    name: "type",
    type: "ButtonTypes (BUTTON | RESET | SUBMIT)",
    description: 'Defines the button type. Defaults to "button".',
    inputType: "none",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Disables the button if true. Defaults to false.",
    inputType: "checkbox",
  },
];

export const iconPropsDocumentation = [
  {
    name: "src",
    type: "string",
    description: "The source URL of the icon image.",
    inputType: "none",
  },
  {
    name: "alt",
    type: "string",
    description:
      "The alt text for the icon, providing accessibility information.",
    inputType: "none",
  },
  {
    name: "className",
    type: "string",
    description: "Optional CSS class for additional styling of the icon.",
    inputType: "none",
  },
  {
    name: "size",
    type: "string",
    description:
      "Defines the size of the icon. Can be any valid CSS size value.",
    inputType: "select",
    options: ["16px", "24px", "32px", "48px"],
    defaultValue: "32px",
  },
];

export const navBarPropsDocumentation = [
  {
    name: "children",
    type: "React.ReactNode",
    description:
      "Le contenu à afficher à l'intérieur de la barre de navigation.",
    inputType: "none",
  },
  {
    name: "fixed",
    type: "boolean",
    description:
      "Définit si la barre de navigation doit être fixée en haut de la page. Valeur par défaut: false.",
    inputType: "none",
  },
  {
    name: "className",
    type: "string",
    description:
      "Classe CSS supplémentaire pour personnaliser le style de la barre de navigation. Optionnel.",
    inputType: "none",
  },
];

export const fullScreenPropsDocumentation = [
  {
    name: "element",
    type: "HTMLElement",
    description:
      "L'élément qui doit être affiché en plein écran. Si non fourni, l'élément principal du document sera utilisé.",
    inputType: "none",
  },
  {
    name: "className",
    type: "string",
    description:
      "Classe CSS supplémentaire pour personnaliser le style du bouton plein écran. Optionnel.",
    inputType: "none",
  },
];

export const logoPropsDocumentation = [
  {
    name: "className",
    type: "string",
    description:
      "Classe CSS supplémentaire pour personnaliser le style du logo. Optionnel.",
    inputType: "none",
  },
];

export const bigImageSliderPropsDocumentation = [
  {
    name: "photos",
    type: "IPhoto[]",
    description:
      "An array of photo objects. Each object must contain a 'photos' array, and each photo inside it should have properties like 'url_full'.",
    inputType: "none",
  },
];

export const modalPropsDocumentation = [
  {
    name: "onDisplay",
    type: "boolean",
    description:
      "Controls whether the modal is displayed. Should be `true` to show the modal and `false` to hide it.",
    inputType: "checkbox",
  },
  {
    name: "onClose",
    type: "() => void",
    description:
      "Function to handle closing the modal. Called after the close button is clicked or the background is clicked.",
    inputType: "none",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description:
      "The content inside the modal. Can include any valid React elements.",
    inputType: "none",
  },
  {
    name: "className",
    type: "string",
    description:
      "Optional additional CSS classes for styling the modal. Empty by default.",
    inputType: "none",
  },
  {
    name: "title",
    type: "string",
    description:
      "Optional title for the modal. Displays at the top in the header section. Empty by default.",
    inputType: "text",
    defaultValue: "Sample modal",
  },
];

export const sideBarPropsDocumentation = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content to be displayed inside the sidebar.",
    inputType: "none",
  },
  {
    name: "onClose",
    type: "() => void",
    description:
      "Function to be executed when the sidebar is closed, typically to hide the sidebar.",
    inputType: "none",
  },
  {
    name: "closeSideBar",
    type: "boolean",
    description:
      "A flag that triggers the sidebar to close. When true, the sidebar starts its closing animation and executes the onClose function.",
    inputType: "none",
  },
];

export const imageSliderPropsDocumentation = [
  {
    name: "photos",
    type: "IPhoto[]",
    description:
      "An array of photo objects. Each object must contain a 'photos' array, and each photo inside it should have properties like 'url_full'.",
    inputType: "none",
  },
];
