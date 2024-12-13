const allFonts = {
    CUSTOM_LTR_FONT_REGULAR: "Ananda-Regular",
    CUSTOM_LTR_FONT_MEDIUM: "Play-Medium",
    CUSTOM_LTR_FONT_BOLD: "Roboto-Black",
    CUSTOM_RTL_FONT_REGULAR: "Roboto-BlackItalic",
  };
  
  export interface IFontGroup {
    regular: string;
    medium: string;
    bold: string;
  }
  
  // languages is either Right to Left or Left to Right
  type LanguagesWithFonts = "ltr" | "rtl";
  
  const fontMap: Record<LanguagesWithFonts, IFontGroup> = {
    ltr: {
      regular: allFonts.CUSTOM_LTR_FONT_REGULAR,
      medium: allFonts.CUSTOM_LTR_FONT_MEDIUM,
      bold: allFonts.CUSTOM_LTR_FONT_BOLD,
    },
    rtl: {
      regular: allFonts.CUSTOM_RTL_FONT_REGULAR,
      medium: allFonts.CUSTOM_RTL_FONT_REGULAR,
      bold: allFonts.CUSTOM_RTL_FONT_REGULAR,
    },
  };
  
  export default fontMap;
  