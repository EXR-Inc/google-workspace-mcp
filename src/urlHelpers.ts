// urlHelpers.ts - Helper functions for constructing Google Workspace URLs

/**
 * Constructs a Google Docs URL (no authuser)
 */
export function getDocsUrl(documentId: string, _accountEmail: string): string {
  return `https://docs.google.com/document/d/${documentId}/edit`;
}

/**
 * Constructs a Google Sheets URL (no authuser)
 */
export function getSheetsUrl(spreadsheetId: string, _accountEmail: string): string {
  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
}

/**
 * Constructs a Google Slides URL (no authuser)
 */
export function getSlidesUrl(presentationId: string, _accountEmail: string): string {
  return `https://docs.google.com/presentation/d/${presentationId}/edit`;
}

/**
 * Constructs a Google Forms edit URL (no authuser)
 */
export function getFormsUrl(formId: string, _accountEmail: string): string {
  return `https://docs.google.com/forms/d/${formId}/edit`;
}

/**
 * Constructs a Google Forms response URL (no authuser)
 */
export function getFormsResponseUrl(formId: string, _accountEmail: string): string {
  return `https://docs.google.com/forms/d/${formId}/edit#responses`;
}

/**
 * Constructs a Google Drive file URL using open?id= format (no authuser)
 */
export function getDriveFileUrl(fileId: string, _accountEmail: string): string {
  return `https://drive.google.com/open?id=${fileId}`;
}

/**
 * Constructs a Google Drive folder URL (no authuser)
 */
export function getDriveFolderUrl(folderId: string, _accountEmail: string): string {
  return `https://drive.google.com/drive/folders/${folderId}`;
}

/**
 * Constructs a Gmail message URL (no authuser)
 */
export function getGmailMessageUrl(messageId: string, _accountEmail: string): string {
  return `https://mail.google.com/mail/#all/${messageId}`;
}

/**
 * Constructs a Gmail thread URL (no authuser)
 */
export function getGmailThreadUrl(threadId: string, _accountEmail: string): string {
  return `https://mail.google.com/mail/#all/${threadId}`;
}

/**
 * Constructs a Gmail drafts URL (no authuser)
 */
export function getGmailDraftsUrl(_accountEmail: string): string {
  return `https://mail.google.com/mail/#drafts`;
}

/**
 * Constructs a Gmail draft URL (no authuser)
 */
export function getGmailDraftUrl(draftId: string, _accountEmail: string): string {
  return `https://mail.google.com/mail/#drafts?compose=${draftId}`;
}

/**
 * Constructs a Google Calendar event URL (no authuser)
 */
export function getCalendarEventUrl(
  eventId: string,
  _accountEmail: string,
  _calendarId: string = 'primary'
): string {
  const encodedEventId = encodeURIComponent(eventId);
  return `https://calendar.google.com/calendar/event?eid=${encodedEventId}`;
}

/**
 * Constructs a Google Calendar view URL (no authuser)
 */
export function getCalendarUrl(_accountEmail: string): string {
  return `https://calendar.google.com/calendar/r`;
}

/**
 * Returns the URL as-is, stripping any existing authuser parameter.
 */
export function addAuthUserToUrl(url: string, _accountEmail: string): string {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.delete('authuser');
    // Also strip ouid, rtpof, sd params added by Drive API
    urlObj.searchParams.delete('ouid');
    urlObj.searchParams.delete('rtpof');
    urlObj.searchParams.delete('sd');
    urlObj.searchParams.delete('usp');
    return urlObj.toString();
  } catch {
    return url;
  }
}

/**
 * Constructs a Google Contacts URL (no authuser)
 */
export function getContactsUrl(_accountEmail: string): string {
  return `https://contacts.google.com/`;
}

/**
 * Constructs a Google Contacts person URL (no authuser)
 */
export function getContactPersonUrl(resourceName: string, _accountEmail: string): string {
  const personId = resourceName.replace('people/', '');
  return `https://contacts.google.com/person/${personId}`;
}
