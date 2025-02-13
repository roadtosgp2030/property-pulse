import connectDB from "@/config/database";
import Message from '@/models/Message'
import { getSessionUser } from "@/utils/getSessionUser";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic'

// GET /api/messages/unread-count
export const GET = async (request: NextRequest) => {
    try {
        await connectDB()

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response('You must be logged in to send a message.', {
                status: 401,
            });
        }

        const { userId } = sessionUser;

        const unreadMessagesCount = await Message.countDocuments({ recipient: userId, read: false })

        return new Response(JSON.stringify({ count: unreadMessagesCount }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong!', {status: 500})
    }
}
