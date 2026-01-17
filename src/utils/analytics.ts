export type EventName = 'click_contact' | 'download_cv' | 'view_project';

export function track(event: EventName, payload?: Record<string, unknown>) {
  const mode = (import.meta as any).env?.MODE || 'development';
  if (mode !== 'production') {
    console.debug('[track]', event, payload);
  }
}
