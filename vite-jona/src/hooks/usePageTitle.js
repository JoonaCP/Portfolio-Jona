import { useEffect } from "react";

const SITE_TITLE = "Jonathan Calistro | Architecture and Interior Design";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Jonathan Calistro` : SITE_TITLE;
  }, [title]);
}
