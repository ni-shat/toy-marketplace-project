

const Blogs = () => {
    return (
        <div className="text-gray-800 w-[90%] mx-auto mt-16 md:mt-32 md:w-[80%] relative">


            {/* blogs */}
            <div id='report' className='m-10 mb-40 w-[100%] md:w-[70%] mx-auto text-sm '>
                <div className='text-center'>
                    <h3 className='md:mb-3 mb-1 text-base'><span className="font-bold  md:text-3xl">Deep Dive into Web Development: </span> <br />
                        <p className="mt-2 text-sm">Access Tokens, Databases, Express.js, and Nest.js</p>
                    </h3>
                </div>

                <div className="">
                    <div className="mb-14 md:mb-32 mt-20 md:mt-32 mr-0 space-y-5 ">
                        <p className="mb-6 md:mb-12 text-base md:text-2xl font-bold">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </p>
                        <p className="space-y-2">
                            <p className="font-semibold">Access Token </p>
                            <p>The client sends the user's credentials (e.g., username and password) to the authentication server.  If the credentials are valid, the authentication server generates an access token and a refresh token and returns them to the client.  The client includes the access token in API requests to access protected resources on the server. Access tokens have a limited lifespan to ensure security. When an access token expires, the client receives an error when trying to access protected resources.  If the client receives an access token expiration error, it can use the refresh token to request a new access token from the authentication server without requiring the user to re-authenticate. The client can continue using the new access token to access resources until it expires, and then repeat the refresh process as needed.</p>
                        </p>
                        <p className="space-y-2">
                            <p className="font-semibold">Refresh Token </p>
                            <p>A refresh token is also issued by the authentication server, but it has a longer lifespan compared to the access token. The purpose of a refresh token is to obtain a new access token when the current access token expires without requiring the user to re-authenticate. Refresh tokens are typically used to maintain a user's session and provide a seamless experience.</p>
                        </p>

                        <p className="space-y-2">
                            <p className="font-semibold">How they work?</p>
                            <p>
                                An access token is a credential that is issued by an authentication server after a successful authentication process. It is a short-lived token that grants permission to access specific resources or perform certain actions on behalf of the authenticated user. Access tokens are usually included in API requests as a header or a query parameter.</p>
                        </p> <br />
                        <p>
                            Since the access token is typically short-lived, it is usually stored in memory (RAM) rather than being persisted on the client side. This reduces the risk of token exposure in case of a security breach.


                            The refresh token has a longer lifespan and needs to be stored securely. It should be stored in a secure storage mechanism, such as an HTTP-only cookie with the Secure and SameSite attributes set, or in a secure storage solution provided by the platform (e.g., Keychain on iOS, Keystore on Android).
                        </p>

                    </div>
                    <div className="mb-14 md:mb-32">
                        <p className="mb-6 md:mb-12 text-base md:text-2xl font-bold">
                            Compare SQL and NoSQL databases?
                        </p>
                        <p className="mb-2">
                            <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems that have distinct characteristics. Here's a comparison between SQL and NoSQL databases:</p>
                        </p>


                        <p className="space-y-2 mt-8">
                            <p className="font-semibold">SQL Databases</p>
                            <p>
                                <ul className="list list-disc list-outside px-8 pt-3 space-y-3">
                                    <li>SQL databases are based on a predefined schema that defines the structure of the data, including tables, columns, and relationships. They follow a rigid, tabular structure.</li>
                                    <li>SQL databases enforce strong data integrity rules, such as constraints, foreign key relationships, and unique indexes, to maintain data consistency.</li>
                                    <li>SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized way to interact with relational databases.</li>
                                    <li>SQL databases are typically vertically scalable, which means increasing the server's hardware resources (e.g., CPU, RAM) to handle more load. They are generally suitable for structured data and perform well with complex queries and transactions.</li>
                                    <li>SQL databases prioritize ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring strict data consistency and transaction reliability.</li>
                                </ul>
                            </p>
                        </p> <br />
                        <p className="space-y-2 mt-5">
                            <p className="font-semibold">SQL Databases</p>
                            <p>
                                <ul className="list list-disc list-outside px-8 pt-3 space-y-3">
                                    <li>NoSQL databases are schema-less or schema-flexible, allowing for dynamic and flexible data models. They can handle unstructured, semi-structured, and structured data.</li>
                                    <li>NoSQL databases are designed to be horizontally scalable, allowing for distributed data storage across multiple servers. They can handle large amounts of data and high traffic loads.</li>
                                    <li>NoSQL databases often use non-SQL query languages or APIs specific to the database type (e.g., MongoDB's query language, Cassandra's CQL). The query languages may differ across different NoSQL databases.</li>
                                    <li>NoSQL databases offer flexibility in data modeling, making it easier to adapt to evolving application requirements without modifying the database schema.</li>
                                    <li>NoSQL databases excel in handling high-velocity and high-volume data. They prioritize performance and scalability over strict data consistency, making them suitable for use cases with a massive amount of read and write operations.</li>
                                </ul>
                            </p>
                        </p> <br />
                        <p className="mt-6">
                            The choice between SQL and NoSQL databases depends on the specific requirements of application. SQL databases are well-suited for structured data, complex queries, and maintaining strict data integrity. NoSQL databases are a better fit for handling large amounts of unstructured or semi-structured data, providing high scalability and performance.
                        </p>

                    </div>
                    <div className="mb-14 md:mb-32">
                        <p className="mb-6 md:mb-12 text-base md:text-2xl font-bold">
                            What is express js? What is Nest JS ?
                        </p>
                        <p>
                            Express.js and Nest.js are both web application frameworks that are used to build server-side applications in JavaScript or TypeScript. Here's a brief explanation of each:
                        </p>
                        <p className="space-y-2 mt-5">
                            <p className="font-semibold">Express.js </p>
                            <p>Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and straightforward way to handle routing, middleware, and server-side logic for building web applications and APIs. Express.js has a lightweight core and allows developers to add additional functionality through its extensive middleware ecosystem. It is known for its simplicity, ease of use, and flexibility, making it a popular choice for building server-side applications in Node.js.</p>
                        </p>
                        <p className="space-y-2 mt-5">
                            <p className="font-semibold">Nest.js </p>
                            <p>Nest.js is a progressive and opinionated web application framework built with TypeScript. It is designed to provide a scalable and maintainable architecture for server-side applications. Nest.js is heavily influenced by Angular's architecture and uses decorators, dependency injection, and modules to structure and organize code. It supports various features such as routing, middleware, dependency injection, and more out of the box. Nest.js aims to boost developer productivity and code maintainability by promoting a modular and structured approach to building server-side applications.</p>
                        </p>
                        <p>
                            While both Express.js and Nest.js are used for building server-side applications, Nest.js provides a more structured and opinionated approach, leveraging concepts from Angular, whereas Express.js offers a more minimalist and flexible approach, allowing developers to have more control and customization over their application.
                        </p>
                    </div>
                    <div className="mb-14 md:mb-32">
                        <p className="mb-6 md:mb-12 text-base md:text-2xl font-bold">
                            What is MongoDB aggregate and how does it work ?
                        </p>
                        <p>
                            In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on the documents within a collection. It allows you to perform complex computations, transformations, and aggregations on the data.
                        </p>
                        <p className="mt-5">
                            The aggregate operation in MongoDB works by using a pipeline approach. A pipeline consists of multiple stages, each of which performs a specific operation on the data and passes the results to the next stage. The stages are processed sequentially, allowing you to transform and manipulate the data at each step.
                        </p>
                        <p className="pt-10">
                            <span className="font-semibold">Here is a brief overview of some common stages used in the MongoDB aggregate pipeline:</span>

                            <ol className="list list-decimal list-outside p-5 space-y-1.5">

                                <li>
                                    $match: Filters the documents based on specified criteria, similar to the find operation.</li>
                                <li>$group: Groups the documents based on a specified key and performs aggregations on the grouped data, such as counting, summing, averaging, etc.</li>
                                <li>$project: Reshapes the documents and includes/excludes specific fields or computes new fields.</li>
                                <li>$sort: Sorts the documents based on one or more fields.</li>
                                <li>$limit: Limits the number of documents to be returned.</li>
                                <li>$skip: Skips a specified number of documents from the beginning of the result set.</li>
                                <li>$unwind: Deconstructs an array field, creating separate documents for each element of the array.</li>
                                <li>$lookup: Performs a left outer join with another collection and combines matching documents.</li>
                            </ol>
                            <p className="mt-6">
                                These stages can be combined in various ways to perform complex aggregations and transformations on the data. The result of the aggregate operation is a cursor that can be iterated to access the aggregated data.
                            </p>
                        </p>
                    </div>
                </div>

            </div>

            <hr />
        </div>
    );
};

export default Blogs;