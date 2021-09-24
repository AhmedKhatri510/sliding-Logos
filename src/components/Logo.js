import React, { useState, useEffect, useRef } from "react";

const Icon = ({ name, size = 16, fill = "#000" }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(`../logos/${name}`);
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={size} height={size} fill={fill} />;
  }

  return null;
};
export default Icon;
