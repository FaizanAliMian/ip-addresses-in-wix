import { ok, badRequest } from 'wix-http-functions';



export function get_ip(request) {
    let requestIp = request.ip;
    return ok({
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            ip: requestIp
        }
    });
}
