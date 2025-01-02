// API route for registration
// /api/register/route.tsx

import dbConnect from '../../../libs/db';
import UserModel from '../../../models/userModel';
import {NextResponse} from "next/server";
import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parsing to handle FormData manually
    },
};

const POST = async (req: any, res: any) => {
    await dbConnect();

    const form = new formidable.IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(req, async (err:any, fields:any, files:any) => {
            if (err) {
                console.error('Error parsing form data:', err);
                reject(
                    NextResponse.json(
                        {error: 'Invalid form data'},
                        {status: 400}
                    )
                );
                return;
            }

            try {
                const {name, email, password} = fields;

                // Validate input
                if (!name || !email || !password) {
                    resolve(
                        NextResponse.json(
                            {error: 'All fields are required'},
                            {status: 400}
                        )
                    );
                    return;
                }

                // Save user to database
                const user = await UserModel.create({
                    name,
                    email,
                    password, // Make sure to hash the password in production!
                });

                resolve(
                    NextResponse.json(user, {
                        status: 201,
                    })
                );
            } catch (error) {
                console.error(error);
                resolve(
                    NextResponse.json(
                        {error: 'Internal Server Error'},
                        {status: 500}
                    )
                );
            }
        });
    });
}

export {POST}