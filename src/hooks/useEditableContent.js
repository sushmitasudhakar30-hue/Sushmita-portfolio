import { useState, useEffect, useCallback } from 'react';

export function useEditableContent(key, defaultValue) {
  const storageKey = `portfolio_content_${key}`;

  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored !== null ? stored : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const startEdit = useCallback(() => {
    setDraft(value);
    setIsEditing(true);
  }, [value]);

  const saveEdit = useCallback(() => {
    setValue(draft);
    try {
      localStorage.setItem(storageKey, draft);
    } catch {}
    setIsEditing(false);
  }, [draft, storageKey]);

  const cancelEdit = useCallback(() => {
    setDraft(value);
    setIsEditing(false);
  }, [value]);

  const resetToDefault = useCallback(() => {
    setValue(defaultValue);
    setDraft(defaultValue);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setIsEditing(false);
  }, [defaultValue, storageKey]);

  return { value, isEditing, draft, setDraft, startEdit, saveEdit, cancelEdit, resetToDefault };
}

export function useEditablePhoto(key, defaultSrc) {
  const storageKey = `portfolio_photo_${key}`;

  const [src, setSrc] = useState(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored || defaultSrc;
    } catch {
      return defaultSrc;
    }
  });

  const handleUpload = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setSrc(dataUrl);
      try {
        localStorage.setItem(storageKey, dataUrl);
      } catch {}
    };
    reader.readAsDataURL(file);
  }, [storageKey]);

  const resetPhoto = useCallback(() => {
    setSrc(defaultSrc);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }, [defaultSrc, storageKey]);

  return { src, handleUpload, resetPhoto };
}
