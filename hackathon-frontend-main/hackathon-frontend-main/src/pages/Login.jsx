// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../store/slices/authSlice";
// import toast from "react-hot-toast";
// import { 
//   Heart, Mail, Lock, Loader, AlertCircle, 
//   TrendingUp, Clock, Users, Sparkles 
// } from "lucide-react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const loginValidationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading } = useSelector((state) => state.auth);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginValidationSchema,
//     onSubmit: async (values) => {
//       try {
//         await dispatch(login(values)).unwrap();
//         toast.success("✅ Welcome back! / Khush Amdeed!");
//         navigate("/dashboard");
//       } catch (error) {
//         toast.error(error || "❌ Login failed / Login nahi ho saka");
//       }
//     },
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex">
//       {/* Left Side - Information */}
//       <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-500 to-sky-500 p-12 flex-col justify-between relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
//         </div>

//         <div className="relative z-10">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 mb-12">
//             <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
//               <Heart className="w-10 h-10 text-white" />
//             </div>
//             <span className="text-4xl font-bold text-white">
//               Health<span className="text-sky-200">Mate</span>
//             </span>
//           </Link>

//           {/* Main Content */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
//                 Welcome Back!
//               </h1>
//               <p className="text-2xl text-sky-100 font-semibold">
//                 Aapki Sehat, Hamari Zimmedari 💚
//               </p>
//               <p className="text-xl text-white/90 mt-4 leading-relaxed">
//                 Continue managing your health records with ease and confidence
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
//                 <div className="text-3xl font-bold text-white mb-1">10K+</div>
//                 <div className="text-white/80 text-sm">Active Users</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
//                 <div className="text-3xl font-bold text-white mb-1">50K+</div>
//                 <div className="text-white/80 text-sm">Reports Analyzed</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
//                 <div className="text-3xl font-bold text-white mb-1">100%</div>
//                 <div className="text-white/80 text-sm">Secure</div>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                 <div className="bg-white/20 p-2 rounded-lg">
//                   <Sparkles className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">AI-Powered Insights</h3>
//                   <p className="text-white/80 text-sm">Get instant health analysis</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                 <div className="bg-white/20 p-2 rounded-lg">
//                   <TrendingUp className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">Track Progress</h3>
//                   <p className="text-white/80 text-sm">Monitor your health journey</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                 <div className="bg-white/20 p-2 rounded-lg">
//                   <Clock className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">Save Time</h3>
//                   <p className="text-white/80 text-sm">Access reports anytime, anywhere</p>
//                 </div>
//               </div>
//             </div>

//             {/* Testimonial */}
//             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="text-4xl">👨‍💼</div>
//                 <div>
//                   <div className="text-white font-semibold">Ahmed Khan</div>
//                   <div className="text-white/70 text-sm">Regular User</div>
//                 </div>
//               </div>
//               <p className="text-white/90 italic">
//                 "HealthMate has made managing my diabetes so much easier. I can track everything in one place!"
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="relative z-10 text-white/70 text-sm">
//           <p>&copy; 2025 HealthMate. All rights reserved.</p>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Mobile Logo */}
//           <div className="lg:hidden text-center mb-8">
//             <Link to="/" className="inline-flex items-center gap-2 mb-4">
//               <div className="bg-sky-100 p-3 rounded-full">
//                 <Heart className="w-10 h-10 text-sky-500" />
//               </div>
//             </Link>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Welcome Back to <span className="text-sky-500">HealthMate</span>
//             </h1>
//             <p className="text-gray-600 mt-2">Sign in to access your health vault</p>
//           </div>

//           {/* Desktop Header */}
//           <div className="hidden lg:block mb-8">
//             <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
//             <p className="text-gray-600 text-lg">Sign in to continue your health journey</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
//             <form onSubmit={formik.handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none ${
//                     formik.touched.email && formik.errors.email
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                   placeholder="your@email.com"
//                 />
//               </div>
//               {formik.touched.email && formik.errors.email && (
//                 <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
//                   <AlertCircle className="w-4 h-4" />
//                   {formik.errors.email}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="password"
//                   name="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none ${
//                     formik.touched.password && formik.errors.password
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                   placeholder="••••••••"
//                 />
//               </div>
//               {formik.touched.password && formik.errors.password && (
//                 <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
//                   <AlertCircle className="w-4 h-4" />
//                   {formik.errors.password}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading || !formik.isValid || !formik.dirty}
//               className="w-full bg-sky-500 hover:bg-sky-600 text-white py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
//             >
//               {loading ? (
//                 <>
//                   <Loader className="w-5 h-5 animate-spin" />
//                   <span>Signing in... / Login ho raha hai...</span>
//                 </>
//               ) : (
//                 <span>Sign In / Login Karein</span>
//               )}
//             </button>
//             </form>

//             <p className="text-center text-gray-600 mt-6">
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-sky-500 hover:text-sky-600 font-semibold"
//               >
//                 Create Account
//               </Link>
//             </p>
//           </div>

//           <p className="text-center text-gray-500 text-sm mt-6">
//             <Link to="/" className="hover:text-sky-500 flex items-center justify-center gap-2">
//               ← Back to Home
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import { Mail, Lock, Loader, AlertCircle } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(login(values)).unwrap();
        toast.success("✅ Welcome back! / Khush Amdeed!");
        navigate("/dashboard");
      } catch (error) {
        toast.error(error || "❌ Login failed / Login nahi ho saka");
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-gray-900 to-purple-900 flex items-center justify-center p-8">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-teal-500/20 p-8"
      >
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <motion.div variants={inputVariants} initial="hidden" animate="visible">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 backdrop-blur-md border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white transition-all duration-300 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-teal-500/30"
                }`}
                placeholder="your@email.com"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {formik.errors.email}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 backdrop-blur-md border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-white transition-all duration-300 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-teal-500/30"
                }`}
                placeholder="••••••••"
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {formik.errors.password}
              </p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading || !formik.isValid || !formik.dirty}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </motion.button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-300"
          >
            Create Account
          </Link>
        </p>

        <p className="text-center text-gray-300 text-sm mt-6">
          <Link
            to="/"
            className="hover:text-teal-400 flex items-center justify-center gap-2 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;