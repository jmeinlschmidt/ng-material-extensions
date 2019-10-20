/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ExportType } from './export-type';
import { Mime } from './mime';
/** @type {?} */
export const MAT_TABLE_EXPORTER = 'mat-table-exporter';
/** @type {?} */
export const TYPE_ARRAY = 'array';
/** @type {?} */
export const CHAR_SET_UTF = ';charset=utf-';
/** @type {?} */
export const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
/** @type {?} */
export const CHAR_SET_UTF_16 = CHAR_SET_UTF + '16';
/** @type {?} */
export const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
/** @type {?} */
export const CONTENT_TYPE_APPLICATION = 'application/';
/** @type {?} */
export const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
/** @type {?} */
export const P = '.';
/** @type {?} */
export const EXTENSION_XLS = P + ExportType.XLS;
/** @type {?} */
export const EXTENSION_XLSX = P + ExportType.XLSX;
/** @type {?} */
export const EXTENSION_CSV = P + ExportType.CSV;
/** @type {?} */
export const EXTENSION_JSON = P + ExportType.JSON;
/** @type {?} */
export const EXTENSION_TEXT = P + ExportType.TXT;
/** @type {?} */
export const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
export const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
/** @type {?} */
export const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
/** @type {?} */
export const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_16);
/** @type {?} */
export const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
/** @type {?} */
export const REF = '!ref';
/** @type {?} */
export const XLS_REGEX = P + '*\.' + ExportType.XLS + '$';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUU5QixNQUFNLE9BQU8sa0JBQWtCLEdBQUcsb0JBQW9COztBQUN0RCxNQUFNLE9BQU8sVUFBVSxHQUFHLE9BQU87O0FBQ2pDLE1BQU0sT0FBTyxZQUFZLEdBQUcsZUFBZTs7QUFDM0MsTUFBTSxPQUFPLGNBQWMsR0FBRyxZQUFZLEdBQUcsR0FBRzs7QUFDaEQsTUFBTSxPQUFPLGVBQWUsR0FBRyxZQUFZLEdBQUcsSUFBSTs7QUFDbEQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRzs7QUFDckQsTUFBTSxPQUFPLHdCQUF3QixHQUFHLGNBQWM7O0FBQ3RELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyx3QkFBd0IsR0FBRyxjQUFjOztBQUMzRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLEdBQUc7O0FBQ3BCLE1BQU0sT0FBTyxhQUFhLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHOztBQUMvQyxNQUFNLE9BQU8sY0FBYyxHQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSTs7QUFDbEQsTUFBTSxPQUFPLGFBQWEsR0FBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUc7O0FBQ2hELE1BQU0sT0FBTyxjQUFjLEdBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJOztBQUNsRCxNQUFNLE9BQU8sY0FBYyxHQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRzs7QUFDakQsTUFBTSxPQUFPLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEdBQUcsY0FBYyxDQUFDOztBQUMxRixNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7O0FBQzVGLE1BQU0sT0FBTyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixHQUFHLElBQUksR0FBRyxjQUFjLENBQUM7O0FBQzVGLE1BQU0sT0FBTyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDOztBQUN0RyxNQUFNLE9BQU8sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQzs7QUFDcEcsTUFBTSxPQUFPLEdBQUcsR0FBRyxNQUFNOztBQUN6QixNQUFNLE9BQU8sU0FBUyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwb3J0VHlwZSB9IGZyb20gJy4vZXhwb3J0LXR5cGUnO1xyXG5pbXBvcnQgeyBNaW1lIH0gZnJvbSAnLi9taW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRfVEFCTEVfRVhQT1JURVIgPSAnbWF0LXRhYmxlLWV4cG9ydGVyJztcclxuZXhwb3J0IGNvbnN0IFRZUEVfQVJSQVkgPSAnYXJyYXknO1xyXG5leHBvcnQgY29uc3QgQ0hBUl9TRVRfVVRGID0gJztjaGFyc2V0PXV0Zi0nO1xyXG5leHBvcnQgY29uc3QgQ0hBUl9TRVRfVVRGXzggPSBDSEFSX1NFVF9VVEYgKyAnOCc7XHJcbmV4cG9ydCBjb25zdCBDSEFSX1NFVF9VVEZfMTYgPSBDSEFSX1NFVF9VVEYgKyAnMTYnO1xyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX1RFWFQgPSBFeHBvcnRUeXBlLlRYVCArICcvJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9BUFBMSUNBVElPTiA9ICdhcHBsaWNhdGlvbi8nO1xyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0VYQ0VMID0gQ09OVEVOVF9UWVBFX0FQUExJQ0FUSU9OICsgJ29jdGV0LXN0cmVhbSc7XHJcbmV4cG9ydCBjb25zdCBQID0gJy4nO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1hMUyA9IFAgKyBFeHBvcnRUeXBlLlhMUztcclxuZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9YTFNYID0gIFAgKyBFeHBvcnRUeXBlLlhMU1g7XHJcbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fQ1NWID0gIFAgKyBFeHBvcnRUeXBlLkNTVjtcclxuZXhwb3J0IGNvbnN0IEVYVEVOU0lPTl9KU09OID0gIFAgKyBFeHBvcnRUeXBlLkpTT047XHJcbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fVEVYVCA9ICBQICsgRXhwb3J0VHlwZS5UWFQ7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0VYQ0VMX1hMUyA9IG5ldyBNaW1lKEVYVEVOU0lPTl9YTFMsIENPTlRFTlRfVFlQRV9FWENFTCArIENIQVJfU0VUX1VURl84KTtcclxuZXhwb3J0IGNvbnN0IE1JTUVfRVhDRUxfWExTWCA9IG5ldyBNaW1lKEVYVEVOU0lPTl9YTFNYLCBDT05URU5UX1RZUEVfRVhDRUwgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0pTT04gPSBuZXcgTWltZShFWFRFTlNJT05fSlNPTiwgQ09OVEVOVF9UWVBFX1RFWFQgKyBKU09OICsgQ0hBUl9TRVRfVVRGXzgpO1xyXG5leHBvcnQgY29uc3QgTUlNRV9UWFQgPSBuZXcgTWltZShFWFRFTlNJT05fVEVYVCwgQ09OVEVOVF9UWVBFX1RFWFQgKyBFeHBvcnRUeXBlLlRYVCArIENIQVJfU0VUX1VURl8xNik7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0NTViA9IG5ldyBNaW1lKEVYVEVOU0lPTl9DU1YsIENPTlRFTlRfVFlQRV9URVhUICsgRXhwb3J0VHlwZS5DU1YgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBSRUYgPSAnIXJlZic7XHJcbmV4cG9ydCBjb25zdCBYTFNfUkVHRVggPSBQICsgJypcXC4nICsgRXhwb3J0VHlwZS5YTFMgKyAnJCc7XHJcblxyXG4iXX0=