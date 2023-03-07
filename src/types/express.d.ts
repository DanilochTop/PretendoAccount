import NintendoCertificate from '@/nintendo-certificate';
import { HydratedPNIDDocument } from '@/types/mongoose/pnid';
import { HydratedNEXAccountDocument } from '@/types/mongoose/nex-account';

declare global {
	namespace Express {
		interface Request {
			pnid?: HydratedPNIDDocument;
			nexUser?: HydratedNEXAccountDocument;
			isCemu?: boolean;
			files?: Record<string, any>;
			certificate?: NintendoCertificate;
		}
	}
}