
class StatusCode
{
    static get HTTP_CONTINUE()
    {
        return { code: 100, statusCode: 'HTTP_CONTINUE', status: '' };
    }

    static get HTTP_SWITCHING_PROTOCOLS()
    {
        return { code: 101, statusCode: 'HTTP_SWITCHING_PROTOCOLS', status: '' };
    }

    static get HTTP_PROCESSING()
    {
        return { code: 102, statusCode: 'HTTP_PROCESSING', status: '' }; // RFC2518
    }

    static get HTTP_EARLY_HINTS()
    {
        return { code: 103, statusCode: 'HTTP_EARLY_HINTS', status: '' };// RFC8297
    }

    static get HTTP_OK()
    {
        return { code: 200, statusCode: 'HTTP_OK', status: 'success' };
    }

    static get HTTP_CREATED()
    {
        return { code: 201, statusCode: 'HTTP_CREATED', status: 'success' };
    }

    static get HTTP_ACCEPTED()
    {
        return { code: 202, statusCode: 'HTTP_ACCEPTED', status: 'success' };
    }

    static get HTTP_NON_AUTHORITATIVE_INFORMATION()
    {
        return { code: 203, statusCode: 'HTTP_NON_AUTHORITATIVE_INFORMATION', status: 'success' };
    }

    static get HTTP_NO_CONTENT()
    {
        return { code: 204, statusCode: 'HTTP_NO_CONTENT', status: 'success' };
    }

    static get HTTP_RESET_CONTENT()
    {
        return { code: 205, statusCode: 'HTTP_RESET_CONTENT', status: 'success' };
    }

    static get HTTP_PARTIAL_CONTENT()
    {
        return { code: 206, statusCode: 'HTTP_PARTIAL_CONTENT', status: 'success' };
    }

    static get HTTP_MULTI_STATUS()
    {
        return { code: 207, statusCode: 'HTTP_MULTI_STATUS', status: 'success' };
    }          // RFC4918

    static get HTTP_ALREADY_REPORTED()
    {
        return { code: 208, statusCode: 'HTTP_ALREADY_REPORTED', status: 'success' };
    }      // RFC5842

    static get HTTP_IM_USED()
    {
        return { code: 226, statusCode: 'HTTP_IM_USED', status: 'success' };
    }               // RFC3229

    static get HTTP_MULTIPLE_CHOICES()
    {
        return { code: 300, statusCode: 'HTTP_MULTIPLE_CHOICES', status: '' };
    }

    static get HTTP_MOVED_PERMANENTLY()
    {
        return { code: 301, statusCode: 'HTTP_MOVED_PERMANENTLY', status: '' };
    }

    static get HTTP_FOUND()
    {
        return { code: 302, statusCode: 'HTTP_FOUND', status: '' };
    }

    static get HTTP_SEE_OTHER()
    {
        return { code: 303, statusCode: 'HTTP_SEE_OTHER', status: '' };
    }

    static get HTTP_NOT_MODIFIED()
    {
        return { code: 304, statusCode: 'HTTP_NOT_MODIFIED', status: '' };
    }

    static get HTTP_USE_PROXY()
    {
        return { code: 305, statusCode: 'HTTP_USE_PROXY', status: '' };
    }

    static get HTTP_RESERVED()
    {
        return { code: 306, statusCode: 'HTTP_RESERVED', status: '' };
    }

    static get HTTP_TEMPORARY_REDIRECT()
    {
        return { code: 307, statusCode: 'HTTP_TEMPORARY_REDIRECT', status: '' };
    }

    static get HTTP_PERMANENTLY_REDIRECT()
    {
        return { code: 308, statusCode: 'HTTP_PERMANENTLY_REDIRECT', status: '' };
    }  // RFC7238

    static get HTTP_BAD_REQUEST()
    {
        return { code: 400, statusCode: 'HTTP_BAD_REQUEST', status: 'error' };
    }

    static get HTTP_UNAUTHORIZED()
    {
        return { code: 401, statusCode: 'HTTP_UNAUTHORIZED', status: 'error' };
    }

    static get HTTP_PAYMENT_REQUIRED()
    {
        return { code: 402, statusCode: 'HTTP_PAYMENT_REQUIRED', status: 'error' };
    }

    static get HTTP_FORBIDDEN()
    {
        return { code: 403, statusCode: 'HTTP_FORBIDDEN', status: 'error' };
    }

    static get HTTP_NOT_FOUND()
    {
        return { code: 404, statusCode: 'HTTP_NOT_FOUND', status: 'error' };
    }

    static get HTTP_METHOD_NOT_ALLOWED()
    {
        return { code: 405, statusCode: 'HTTP_METHOD_NOT_ALLOWED', status: 'error' };
    }

    static get HTTP_NOT_ACCEPTABLE()
    {
        return { code: 406, statusCode: 'HTTP_NOT_ACCEPTABLE', status: 'error' };
    }

    static get HTTP_PROXY_AUTHENTICATION_REQUIRED()
    {
        return { code: 407, statusCode: 'HTTP_PROXY_AUTHENTICATION_REQUIRED', status: 'error' };
    }

    static get HTTP_REQUEST_TIMEOUT()
    {
        return { code: 408, statusCode: 'HTTP_REQUEST_TIMEOUT', status: 'error' };
    }

    static get HTTP_CONFLICT()
    {
        return { code: 409, statusCode: 'HTTP_CONFLICT', status: 'error' };
    }

    static get HTTP_GONE()
    {
        return { code: 410, statusCode: 'HTTP_GONE', status: 'error' };
    }

    static get HTTP_LENGTH_REQUIRED()
    {
        return { code: 411, statusCode: 'HTTP_LENGTH_REQUIRED', status: 'error' };
    }

    static get HTTP_PRECONDITION_FAILED()
    {
        return { code: 412, statusCode: 'HTTP_PRECONDITION_FAILED', status: 'error' };
    }

    static get HTTP_REQUEST_ENTITY_TOO_LARGE()
    {
        return { code: 413, statusCode: 'HTTP_REQUEST_ENTITY_TOO_LARGE', status: 'error' };
    }

    static get HTTP_REQUEST_URI_TOO_LONG()
    {
        return { code: 414, statusCode: 'HTTP_REQUEST_URI_TOO_LONG', status: 'error' };
    }

    static get HTTP_UNSUPPORTED_MEDIA_TYPE()
    {
        return { code: 415, statusCode: 'HTTP_UNSUPPORTED_MEDIA_TYPE', status: 'error' };
    }

    static get HTTP_REQUESTED_RANGE_NOT_SATISFIABLE()
    {
        return { code: 416, statusCode: 'HTTP_REQUESTED_RANGE_NOT_SATISFIABLE', status: 'error' };
    }

    static get HTTP_EXPECTATION_FAILED()
    {
        return { code: 417, statusCode: 'HTTP_EXPECTATION_FAILED', status: 'error' };
    }

    static get HTTP_I_AM_A_TEAPOT()
    {
        return { code: 418, statusCode: 'HTTP_I_AM_A_TEAPOT', status: 'error' };
    }                                                // RFC2324

    static get HTTP_MISDIRECTED_REQUEST()
    {
        return { code: 421, statusCode: 'HTTP_MISDIRECTED_REQUEST', status: 'error' };
    }                                    // RFC7540

    static get HTTP_UNPROCESSABLE_ENTITY()
    {
        return { code: 422, statusCode: 'HTTP_UNPROCESSABLE_ENTITY', status: 'error' };
    }                                  // RFC4918

    static get HTTP_LOCKED()
    {
        return { code: 423, statusCode: 'HTTP_LOCKED', status: 'error' };
    }                                                              // RFC4918

    static get HTTP_FAILED_DEPENDENCY()
    {
        return { code: 424, statusCode: 'HTTP_FAILED_DEPENDENCY', status: 'error' };
    }                                        // RFC4918

    static get HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL()
    {
        return { code: 425, statusCode: 'HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL', status: 'error' };
    }   // RFC2817

    static get HTTP_TOO_EARLY()
    {
        return { code: 425, statusCode: 'HTTP_TOO_EARLY', status: 'error' };
    }                                                        // RFC-ietf-httpbis-replay-04

    static get HTTP_UPGRADE_REQUIRED()
    {
        return { code: 426, statusCode: 'HTTP_UPGRADE_REQUIRED', status: 'error' };
    }                                          // RFC2817

    static get HTTP_PRECONDITION_REQUIRED()
    {
        return { code: 428, statusCode: 'HTTP_PRECONDITION_REQUIRED', status: 'error' };
    }                                // RFC6585

    static get HTTP_TOO_MANY_REQUESTS()
    {
        return { code: 429, statusCode: 'HTTP_TOO_MANY_REQUESTS', status: 'error' };
    }                                        // RFC6585

    static get HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE()
    {
        return { code: 431, statusCode: 'HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE', status: 'error' };
    }            // RFC6585

    static get HTTP_UNAVAILABLE_FOR_LEGAL_REASONS()
    {
        return { code: 451, statusCode: 'HTTP_UNAVAILABLE_FOR_LEGAL_REASONS', status: 'error' };
    }

    static get HTTP_INTERNAL_SERVER_ERROR()
    {
        return { code: 500, statusCode: 'HTTP_INTERNAL_SERVER_ERROR', status: 'error' };
    }

    static get HTTP_NOT_IMPLEMENTED()
    {
        return { code: 501, statusCode: 'HTTP_NOT_IMPLEMENTED', status: 'error' };
    }

    static get HTTP_BAD_GATEWAY()
    {
        return { code: 502, statusCode: 'HTTP_BAD_GATEWAY', status: 'error' };
    }

    static get HTTP_SERVICE_UNAVAILABLE()
    {
        return { code: 503, statusCode: 'HTTP_SERVICE_UNAVAILABLE', status: 'error' };
    }

    static get HTTP_GATEWAY_TIMEOUT()
    {
        return { code: 504, statusCode: 'HTTP_GATEWAY_TIMEOUT', status: 'error' };
    }

    static get HTTP_VERSION_NOT_SUPPORTED()
    {
        return { code: 505, statusCode: 'HTTP_VERSION_NOT_SUPPORTED', status: 'error' };
    }

    static get HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL()
    {
        return { code: 506, statusCode: 'HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL', status: 'error' };
    }  // RFC2295

    static get HTTP_INSUFFICIENT_STORAGE()
    {
        return { code: 507, statusCode: 'HTTP_INSUFFICIENT_STORAGE', status: 'error' };
    }                                  // RFC4918

    static get HTTP_LOOP_DETECTED()
    {
        return { code: 508, statusCode: 'HTTP_LOOP_DETECTED', status: 'error' };
    }                                                // RFC5842

    static get HTTP_NOT_EXTENDED()
    {
        return { code: 510, statusCode: 'HTTP_NOT_EXTENDED', status: 'error' };
    }                                                  // RFC2774

    static get HTTP_NETWORK_AUTHENTICATION_REQUIRED()
    {
        return { code: 511, statusCode: 'HTTP_NETWORK_AUTHENTICATION_REQUIRED', status: 'error' };
    }            // RFC6585
}

module.exports = {
  StatusCode
}
